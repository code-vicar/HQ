'use strict';
var path = require('path');

global.appRoot = path.resolve(__dirname);
process.env.NODE_CONFIG_DIR = path.join(__dirname, 'app', 'config');

var app = require('./app/app');

app.listen();
