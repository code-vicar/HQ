'use strict';

var express = require('express');
// var https = require('https'); // someday...
var http = require('http');
var config = require('config');
var morgan = require('morgan');

var logger = require('./logger/logger');
var routes = require('./routes/routes');
var expressApp = express();

var App = function App() {
  // setup logging
  this.expressApp = expressApp;
  this.logger = logger(config.get('logging.transports'));

  expressApp.use(morgan('combined', {stream: {write: this.logger.info}}));

  // create routes
  routes(this);
};

App.prototype.listen = function listen() {
  var port;

  if (config.has('Port')) {
    port = config.get('Port');
  }

  port = process.env.PORT || port || 80;

  http.createServer(expressApp).listen(port);
  // https.createServer(options, expressApp).listen(443);

  this.logger.log('info', 'Listening on port ' + port);
};

module.exports = new App();
