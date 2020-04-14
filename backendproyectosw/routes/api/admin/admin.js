var express = require('express');
var router = express.Router();

function initadmin(db) {
  var model = require('./adminmodel')(db);


/////////////////////// GET /ALL/////////////////////////////////
// http://localhost:3000/api/admin/all
  router.get('/all', (req, res)=>{
    model.getcourses((err, dat)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"no se pudo obtener srry"});
      }
      return res.status(200).json(dat);
    });
} );

//////////////////////BY ID/////////////////////////////////////
 // http://localhost:3000/api/admin/byid/:id
   router.get('/byid/:id',(req, res)=>{
    var id =  req.params.id ;
    model.getcoursesById(id, (err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });
});



// http://localhost:3000/api/admin/course/new
router.post('/course/new', (req, res)=>{
    var datosEnviados = req.body;
    model.addNew(datosEnviados, (err, addedDoc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({error:'error'});
      }
      return res.status(200).json(addedDoc);
      }); //addNew
  });


///////////////////////DELETE POR ID////////////////////////////////
//http://localhost:3000/api/employee/delete/:id
router.delete('/delete/:id', (req, res)=>{
  var id = req.params.id;
  model.removecourse(id, (err, deletedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(deletedDoc);
  });
});


  return router;
}

module.exports = initadmin;
