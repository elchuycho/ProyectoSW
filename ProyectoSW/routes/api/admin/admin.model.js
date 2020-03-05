var fs = require('fs');
var fileToSave = 'security.json';
var userModel = {};
var userCollection = [];

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
userCollection.push(
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
);



module.exports = userModel;
