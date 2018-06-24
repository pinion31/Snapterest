const User = require('../models/User');
const Card = require('../models/Card');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const uuidv1 = require('uuid/v1');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => {
    console.log('serializing', user);
   done(null, user._id);
 });

passport.deserializeUser((id, done) => {
  console.log('id', id);
  User.findById(id,
      (err, doc) => {
        console.log('doc is', doc);
        done(null, { result: 'success', user: doc});
      }
  );
});

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
      bcrypt.compare(password, user.password, (err, match) => {
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      });
    }).populate('cards');
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

/*
router.post('/login', (req,res) => {
  const {email, password} = req.body;

  User.findOne({email})
    .populate('cards')
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, match) => {
          if (match) {
            res.send({ result: 'success', user});
          } else {
            res.send({ error: 'Incorrect Password'});
          }
        });
      } else {
        res.send({ error: 'No User Found'});
      }
    });
});*/

router.post('/like-snapcard', (req,res) => {
  Card.findOneAndUpdate({id: req.body.id}, {$inc:{ likes:1 }},{ new: true }).then(card => {
    User.findOneAndUpdate({email: req.body.email}, {$push: {cardsLiked: req.body.id}})
      .then(() => {
        res.json({card});
      });
  });
});

// card as public or private, to be viewed by other users or not
router.post('/toggle-card-public', (req,res) => {
  const { id } = req.body;
  Card.findOne({ id })
    .then(card => {
      const currentPublicValue = card.isPublic;
      console.log('currentPublicValue', currentPublicValue);
      Card.findOneAndUpdate({ id }, {$set:{ isPublic: !currentPublicValue }},{ new: true })
      .then(updatedCard => {
        console.log('changedCard', updatedCard);
        res.json({card:updatedCard});
      });
    }).catch(err => { if (err) { res.json({error: 'Unable to modify card'});}}
    );
});

router.post('/add-user', (req,res) => {
    const {username, password, email, city, state } = req.body;

    const strippedPassword = password.split(' ')[0];
    const usernameLowercase = username.toLowerCase();

    User.findOne({email})
      .then(foundUser => {
        if (foundUser) {
          res.send({error: "User Already Exists."});
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              const newUser = new User({
                username,
                password: hash,
                email: email.toLowerCase(),
                city,
                state,
                cards: [],
                cardsLiked: [],
              });

              newUser.save((err,savedUser) => {
                if (err) throw err;
                res.json(savedUser);
              });
            });
          });
        }
      });
    // save to db

});

router.post('/add-card', (req,res) => {
  const { imageLink, title, owner, description } = req.body;

  const card = new Card({
    id: uuidv1(),
    imageLink,
    title,
    owner,
    description,
    likes: 0,
    isPublic: false,
  })

  User.update({email: owner}, {$push: { cards: card }}).then((err, user) => {

  });

  card.save((err,savedCard) => {
    if (err) {throw err;}
    res.json(savedCard);
  });
});

router.get('/recent-cards/:id', (req,res) => {
  Card.find({isPublic: true, owner: {$ne: req.params.id}})
    .limit(20)
    .then(cards => {
      res.json({all: cards});
    })
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
