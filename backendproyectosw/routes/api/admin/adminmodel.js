var ObjectID = require('mongodb').ObjectID;

function adminmodel(db){
  var lib = {};
  var empColl = db.collection('courses');


  //////////////////////GET EMPLOYESSS ALL///////////////////////////////
  lib.getcourses = (handler)=>{
    empColl.find({}).toArray(handler);
  }
////////////////////////////////////GET BY ID//////////////////////////////////////
  lib.getcoursesById = (id, handler) => {
    var query = {"_id": new ObjectID(id) };
    empColl.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);
      }
    );
  }



  ////////////////////////POST ADD course///////////////////////////////////////
  lib.addNew = (dataToAdd, handler)=>{
  var { coursename1, coursedescrip1, courseprice1} = dataToAdd;
  var courseToAdd = Object.assign(
    {},
    userTemplate,
    {
      coursename: coursename1,
      coursedescrip: coursedescrip1,
      courseprice: courseprice1,
    }
  );
  empColl.insertOne(courseToAdd, (err, rslt)=>{
    if(err){
      return handler(err, null);
    }
    console.log(rslt);
    return handler(null, rslt.ops[0]);
  });
}

  ////////////////////////DELETE POR ID/////////////////////////////////////
  lib.removecourse = (id, handler) => {
    var query = {"_id": new ObjectID(id)};
        empColl.deleteOne(
          query,
          (err, rslt)=>{
            if(err){
              return handler(err, null);
            }
            return handler(null, rslt.result);
          }
        );
  }


  return lib;
}

module.exports = adminmodel;

