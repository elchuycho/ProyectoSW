var express = require('express');
var router = express.Router();

var adminRouter = require('./admin/admin');


router.use('/admin',adminRouter);


module.exports = router;
