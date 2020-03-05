var fs = require('fs');
var fs2 = require('fs');
var fileToSave = 'courses.json';
var fileToSave2 = 'payments.json';
var userModel = {};
var userCollection = [];
var userCollection2 = [];

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
    productosid:'',
    productostitle:"",
    productosupd1:"",
    productosupd2:"",
    productosalbum: ""
}


openFile();
openFile2();

userModel.getAll = ()=>{
    return userCollection;
}

userModel.getById = (id)=>{
    var filteredUsers = userCollection.filter(
        (o)=>{
            return o.productosid === id;
        }
    );
    if(filteredUsers.length){
        return filteredUsers[0];
    }else{
        return null
    }
}



userModel.addNew = ( {productostitle1,productosalbum1,productosupd11,productosupd21} )=>{
    var newUser = Object.assign(
    {},
    userTemplate,
    {
        productostitle:productostitle1,
        productosalbum:productosalbum1,
        productosupd1:productosupd11,
        productosupd2:productosupd21
    }
  );
    newUser.productosid = userCollection.length + 1;

    userCollection.push(newUser);
    writeToFile();
    return newUser;
}


userModel.update = (id, { productosupd11, productosupd21 })=>{
    var updatingUser = userCollection.filter(
      (o, i)=>{
        return o.productosid === id;
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
        if(o.productosid === id){
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
      return o.productosid !== id;
    }
  );
  userCollection = newCollection;
  writeToFile();
  return true;
}




//prueba estatico
/*userCollection.push(
    Object.assign(
        {},
        userTemplate,
        {
            productosid:1,
            productostitle:"PRUEBA TITLE 1",
            productosupd1:"bla",
            productosupd2:"bla",
            productosalbum: "bla"
        }
    )
);*/


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
    paymentsupd1:"",
    paymentsupd2:"",
    paymentsalbum: ""
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



userModel.addNew1 = ( {paymentstitle1,paymentsalbum1,paymentsupd11,paymentsupd21} )=>{
    var newUser2 = Object.assign(
    {},
    userTemplate2,
    {
        paymentstitle:paymentstitle1,
        paymentsalbum:paymentsalbum1,
        paymentsupd1:paymentsupd11,
        paymentsupd2:paymentsupd21
    }
  );
    newUser2.paymentsid = userCollection2.length + 1;

    userCollection2.push(newUser2);
    writeToFile2();
    return newUser2;
}


userModel.update1 = (id, { paymentsupd11, paymentsupd21 })=>{
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
            { paymentsupd1: paymentsupd11, paymentsupd2:paymentsupd21}
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




//prueba estatico
/*userCollection2.push(
    Object.assign(
        {},
        userTemplate2,
        {
            paymentsid:1,
            paymentstitle:"PRUEBA TITLE 1",
            paymentsupd1:"bla",
            paymentsupd2:"bla",
            paymentsalbum: "bla"
        }
    )
);*/



module.exports = userModel;
