'use strict';
var winston = require('winston');

module.exports = function(options) {

  if (!options || !options.forEach) {
    return winston;
  }

  var transports = [];
  options.forEach(function(transport) {
    transports.push(new winston.transports[transport.target](transport.options));
  });

  return new winston.Logger({
    transports: transports
  });
};
