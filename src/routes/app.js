const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const uuidv1 = require('uuid/v1');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const { pool } = require('../config/dbsetup.js')

router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => {
   done(null, user._id);
 });

passport.deserializeUser((id, done) => {
  pool.query(
    'SELECT * FROM users WHERE id = $1',
    [id],
    (err, doc) => {
      done(null, { result: 'success', user: doc.rows[0]});
    }
    );
});

passport.use(new LocalStrategy(
  function(username, password, done) {
   pool.query(
   'SELECT * FROM users WHERE email = $1',
   [username],
   (err, results) => {
    if (err) { return done(err); }
    if (!username) {
      return done(null, false, { message: 'Missing credentials' });
    }

    if (!password) {
      return done(null, false, { message: 'Missing credentials' });
    }

    if (!results.rowCount) { return done(null, false, { message: 'Incorrect username/password.' }); }
    const user = results.rows[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (match) {
        pool.query(
          'SELECT * FROM cards WHERE owner = $1',
          [username],
          (error, results2) => {
            if (err) { throw err; }
            user.cards = results2.rows;
           return done(null, user);
          }
        )
      } else {
        return done(null, false, { message: 'Incorrect username/password.' });
      }
    });
   }
   )
  }
));

function ensureAuthenticated(req,res,next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
}

router.post('/login', (req,res) => {
  // use this setup if you want to return an error message if bad username  or password
  // and you dont want to use redirect. Otherwise, use passport.authenicate as middleware
  passport.authenticate('local', (err,user, info) => {
    if (err) { throw err; }
    if (info) {
      res.send({ error: info.message });
    } else {
      res.send({ user });
    }
  })(req,res);
});

router.post('/like-snapcard', (req,res) => {
  if (!req.body.id) {
    res.status(400).json({message: 'Missing information to like card.'});
    return;
  }

  if (!req.body.email) {
    res.status(400).json({ message: 'Missing email'});
    return;
  }

  pool.query(
    'UPDATE cards SET likes = likes + 1 WHERE id = $1 RETURNING *',
    [req.body.id],
    (err, results) => {
      if (err) { throw err;}
      if (results.rowCount === 0) {
        res.status(400).json({ message: 'Cannot locate card.'});
        return;
      }
      pool.query(
      'UPDATE users SET cardsLiked = array_append(cardsLiked, $1) WHERE email = $2 RETURNING *',
      [req.body.id, req.body.email],
      (error, results2) => {
        if (error) { throw error}
        if (results2.rowCount === 0) {
          res.status(400).json({ message: 'Missing valid information'});
          return;
        }

        res.status(200).json({card: results.rows[0]});
      }
      );

    }
    );
});

// card as public or private, to be viewed by other users or not
router.post('/toggle-card-public', (req,res, next) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ message: 'Missing information to modify card.'});
    return;
  }

  pool.query(
    'UPDATE cards SET isPublic = true WHERE id = $1 RETURNING *',
    [id],
    (err,results) => {
      if (err) { if (err) { res.json({error: 'Unable to modify card'});}}
      if (results.rowCount === 0) {
        res.status(400).json({ message: 'Cannot locate card.'});
        return;
      }
      res.status(200).json({card: results.rows[0]});
    }
    );
});

router.post('/add-user', (req,res, next) => {
    const {username, password, email, city, state } = req.body;

    if (!username || !password || !email || !city || !state) {
      res.status(400).json({message: 'Missing user information'});
      return;
    }

    const strippedPassword = password.split(' ')[0];
    const usernameLowercase = username.toLowerCase();

    pool.query('SELECT EXISTS(SELECT * FROM users WHERE email=$1)',
        [email],
        (err, response) => {
          if (response.rows[0].exists) {
            res.status(400).json({message: 'User Already Exists.'});
          } else {
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(strippedPassword, salt, (err, hash) => {
                pool.query(
                  'INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
                  [usernameLowercase, hash, email.toLowerCase(), city, state, []],
                  (err, response) => {
                    if (err) { throw err; }
                    res.status(200).json(response.rows[0]);
                  }
                );
              });
            });
          }
        });


});

router.post('/add-card', (req,res, next) => {
  const { imageLink, title, owner, description } = req.body;

  if (!imageLink || !title || !owner || !description) {
    res.status(400).json({message: 'Missing Card Information'});
    return;
  }

  pool.query(
    'INSERT INTO cards VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
    [uuidv1(), imageLink, owner, title, description, 0, false],
    (err, response) => {
      if (err) { return next(err) }
      res.status(200).json(response.rows[0]);
    }
  );
});


router.get('/recent-cards/:id', (req,res) => {
  if (!req.params.id) {
    console.log('no id');
    res.status(400).json({message: 'Missing id'});
    return;
  }

  pool.query('SELECT * FROM cards WHERE isPublic = true AND owner != $1',
  [req.params.id],
  (err, results) => {
    res.status(200).json({all: results.rows});
  });
});

router.get('/recent-cards/', (req,res) => {
  res.status(400).json({message: 'Missing id'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
