var express = require('express');
var router = express.Router();
var userModel = require('./admin.model');

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


module.exports = router;
