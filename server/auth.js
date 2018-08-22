const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');
const { pool } = require('../src/config/dbsetup.js');

function requireAuth(req, res, next) {
  if (req.url !== '/login' && req.url !== '/add-user' && req.url !== '/') {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.json({message: 'Missing token'});
    }

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      pool.query('SELECT EXISTS(SELECT * FROM users WHERE email=$1)',
        [decoded.id],
        (err, response) => {
          if (response.rows[0].exists) {
            next();
          } else {
            return res.json({message: 'Unauthorized'});
          }
        });
    });
  } else {
    next();
  }
}

module.exports = requireAuth;