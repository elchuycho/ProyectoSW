var express = require('express');
var router = express.Router();
var userModel = require('./admin.model');


///////////////////////COURSES//////////////////////////////
router.get('/courses/all', (req,res)=>{
    return res.status(200).json(userModel.getAll());
});

router.get('/courses/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    var user = userModel.getById(id);
    return res.status(200).json(user);
});

router.post('/courses/new', (req,res)=>{
    var datosEnviados = req.body;
    var newUser = userModel.addNew(datosEnviados);
    return res.status(200).json(newUser);
});


router.put('/courses/upd/:id', (req, res)=>{
    var id = parseInt(req.params.id);
    var updUser = userModel.update( id, req.body);
    return res.status(200).json(updUser);
});

router.delete('/courses/del/:id', (req,res)=>{
    var id = parseInt(req.params.id);
    userModel.deleteByCode(id);
    res.status(200).json({"deleted":true});
});

//PAYMENTSSS//////////////////////////////////////////////
router.get('/payments/all', (req,res)=>{
    return res.status(200).json(userModel.getAll1());
});

router.get('/payments/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    var user = userModel.getById1(id);
    return res.status(200).json(user);
});

router.post('/payments/new', (req,res)=>{
    var datosEnviados = req.body;
    var newUser2 = userModel.addNew1(datosEnviados);
    return res.status(200).json(newUser2);
});


router.put('/payments/upd/:id', (req, res)=>{
    var id = parseInt(req.params.id);
    var updUser = userModel.update1( id, req.body);
    return res.status(200).json(updUser);
});

router.delete('/payments/del/:id', (req,res)=>{
    var id = parseInt(req.params.id);
    userModel.deleteByCode1(id);
    res.status(200).json({"deleted":true});
});
module.exports = router;
