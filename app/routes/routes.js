'use strict';

module.exports = function(app) {
  app.logger.info('creating routes');

  app.expressApp.get('/', function(req, res) {
    res.send('(⌐■_■) < sup >');
  });
}
