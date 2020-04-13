import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import  PrivateRoute  from './componentes/SecureRoutes/SecureRoute';
import { setJWTBearer, setLocalStorage, getLocalStorage, removeLocalStorage } from './componentes/Utilities/Utilities';

import Home from './componentes/Pages/Public/Home/Home';
import Login from './componentes/Pages/Public/Login/Login';
import Signin from './componentes/Pages/Public/SignIn/SignIn';

import ProductList from './componentes/Pages/Private/Products/ProductList';
import ProductDetail from './componentes/Pages/Private/Products/ProductDetail';
import ProductAdd from './componentes/Pages/Private/Products/ProductNew';
import ProductImg from './componentes/Pages/Private/Products/ProductImg';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component{
  constructor(){
    super();
    this.state = {
      user: getLocalStorage('user')||{},
      jwt: getLocalStorage('jwt')||'',
      id: getLocalStorage('id')||'',
      type: getLocalStorage('type')||'',
      isLogged: false
    }
    if(this.state.jwt!==''){
      this.state.isLogged=true;
      setJWTBearer(this.state.jwt);
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login(user){
    const {jwt, ...fuser} = user;
    this.setState({
      ...this.state,
      isLogged:true,
      user: fuser,
      id: fuser.user._id,
      type:fuser.user.userType,
      jwt: jwt
    });
    setJWTBearer(jwt);
    setLocalStorage('jwt', jwt);
    setLocalStorage('user', fuser);
    setLocalStorage('id', this.state.id);
    setLocalStorage('type',this.state.type)
  }

  logout(){
    removeLocalStorage('jwt');
    removeLocalStorage('user');
    removeLocalStorage('id');
    this.setState({
      ...this.state,
      isLogged:false,
      user:{},
      jwt:''
    });
  }
  render(){
    const auth = {
      isLogged:this.state.isLogged,
      user:this.state.user,
      id: this.state.id,
      type:this.state.type,
      logout: this.logout,
    };
    console.log(this.state.type)
    return (
      <Router>
        <Switch>
          <Route render={(props) => { return (<Home {...props} auth={auth} />) }} path="/" exact />
          <Route render={(props) => { return (<Login {...props} auth={auth} login={this.login} />)}} path="/login" exact/>
        </Switch>
      </Router>
      );  
  }
}

export default App;
