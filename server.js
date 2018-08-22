const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');

const appRoutes = require('./src/routes/app');
const requireAuth = require('./server/auth');

const app = express();
app.use(compression());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/dist/sparkle'));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/', requireAuth, appRoutes);

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/sparkle/index.html'));

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log('app started at ' + new Date(Date.now()));
});

module.exports = app;
