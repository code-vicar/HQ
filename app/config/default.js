'use strict';
/* global appRoot */
var path = require('path');

module.exports = {
  Port: 8080,
  logging: {
    transports: [{
      target: 'File',
      options: {
        level: 'info',
        filename: path.join(appRoot, 'logs', 'all-logs.log'),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, //5MB
        maxFiles: 5,
        colorize: false
      }
    }, {
      target: 'Console',
      options: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
      }
    }]
  }
};
