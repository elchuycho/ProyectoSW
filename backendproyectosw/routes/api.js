var express = require('express');
var router = express.Router();

function initApi(db){
  var adminroute = require('./api/admin/admin')(db);
  router.use('/admin', adminroute);
  return router;
}

module.exports = initApi;
