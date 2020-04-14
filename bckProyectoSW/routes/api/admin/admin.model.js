var ObjectID = require('mongodb').ObjectID;

var fs = require('fs');
var fs2 = require('fs');
var fileToSave = 'courses.json';
var fileToSave2 = 'payments.json';
var userModel = {};
var userCollection = [];
var userCollection2 = [];

var coursesCollection = db.collection("courses");
var userCollection = db.collection("user");

function writeToFile(){
  var serializedJSON = JSON.stringify(userCollection);
  fs.writeFileSync(fileToSave, serializedJSON, { encoding: 'utf8' });
  return true;
}

function openFile(){
  try{
  var serializedJSON = fs.readFileSync(fileToSave,{encoding:'utf8'});
  userCollection = JSON.parse(serializedJSON);
  } catch(e){
    console.log(e);
  }
}


var userTemplate = {
    courseid:'',
    coursename:"",
    productosupd1:"",
    productosupd2:""
}


openFile();
openFile2();

userModel.getAll = ()=>{
    return userCollection;
}

userModel.getById = (id)=>{
    var filteredUsers = userCollection.filter(
        (o)=>{
            return o.courseid === id;
        }
    );
    if(filteredUsers.length){
        return filteredUsers[0];
    }else{
        return null
    }
}



userModel.addNew = ( {coursename1,productosupd11,productosupd21} )=>{
    var newUser = Object.assign(
    {},
    userTemplate,
    {
        coursename:coursename1,
        productosupd1:productosupd11,
        productosupd2:productosupd21
    }
  );
    newUser.courseid = userCollection.length + 1;

    userCollection.push(newUser);
    writeToFile();
    return newUser;
}


userModel.update = (id, { productosupd11, productosupd21 })=>{
    var updatingUser = userCollection.filter(
      (o, i)=>{
        return o.courseid === id;
      }
    );
    if(updatingUser && updatingUser.length>0){
      updatingUser = updatingUser[0];
    } else {
      return null;
    }
    var updateUser = {};
    var newUpdatedCollection = userCollection.map(
      (o, i)=>{
        if(o.courseid === id){
          updateUser = Object.assign({},
             o,
            { productosupd1: productosupd11, productosupd2:productosupd21}
          );
          return updateUser;
        }else{
          return o;
        }
      }
    );
    userCollection = newUpdatedCollection;
    writeToFile();
    return updateUser;
}



userModel.deleteByCode = (id)=>{
  var newCollection = [];
  newCollection = userCollection.filter(
    (o)=>{
      return o.courseid !== id;
    }
  );
  userCollection = newCollection;
  writeToFile();
  return true;
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function writeToFile2(){
  var serializedJSON = JSON.stringify(userCollection2);
  fs2.writeFileSync(fileToSave2, serializedJSON, { encoding: 'utf8' });
  return true;
}

function openFile2(){
  try{
  var serializedJSON = fs2.readFileSync(fileToSave2,{encoding:'utf8'});
  userCollection2 = JSON.parse(serializedJSON);
  } catch(e){
    console.log(e);
  }
}

var userTemplate2 = {
    paymentsid:'',
    paymentstitle:"",
    paymentsupd1:""
}


//openFile2();

userModel.getAll1 = ()=>{
    return userCollection2;
}

userModel.getById1 = (id)=>{
    var filteredUsers = userCollection2.filter(
        (o)=>{
            return o.paymentsid === id;
        }
    );
    if(filteredUsers.length){
        return filteredUsers[0];
    }else{
        return null
    }
}



userModel.addNew1 = ( {paymentstitle1, paymentsupd11} )=>{
    var newUser2 = Object.assign(
    {},
    userTemplate2,
    {
        paymentstitle:paymentstitle1,
        paymentsupd1:paymentsupd11
    }
  );
    newUser2.paymentsid = userCollection2.length + 1;

    userCollection2.push(newUser2);
    writeToFile2();
    return newUser2;
}


userModel.update1 = (id, { paymentsupd11 })=>{
    var updatingUser = userCollection2.filter(
      (o, i)=>{
        return o.paymentsid === id;
      }
    );
    if(updatingUser && updatingUser.length>0){
      updatingUser = updatingUser[0];
    } else {
      return null;
    }
    var updateUser = {};
    var newUpdatedCollection = userCollection2.map(
      (o, i)=>{
        if(o.paymentsid === id){
          updateUser = Object.assign({},
             o,
            { paymentsupd1: paymentsupd11}
          );
          return updateUser;
        }else{
          return o;
        }
      }
    );
    userCollection2 = newUpdatedCollection;
    writeToFile2();
    return updateUser;
}



userModel.deleteByCode1 = (id)=>{
  var newCollection = [];
  newCollection = userCollection2.filter(
    (o)=>{
      return o.paymentsid !== id;
    }
  );
  userCollection2 = newCollection;
  writeToFile2();
  return true;
}




module.exports = userModel;
