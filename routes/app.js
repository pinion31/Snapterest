const User = require('../models/User');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/login', (req,res) => {
  const {email, password} = req.body;

  User.findOne({email})
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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
