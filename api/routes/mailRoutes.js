'use strict';

module.exports = function(app) {

  var _mailController = require('../controllers/mailController');

  var VerifyToken = require('../../auth/verificarToken');

  // Routes
  app.route('/mail/enviar')
     .post(VerifyToken, _mailController.sendEmail);

};