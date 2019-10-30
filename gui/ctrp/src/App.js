import React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; 
import Socialmedia from './components/Socialmedia'; 
import Details from './components/Details'; 
import Cart from './components/Cart';
import Default from './components/Default'; 

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Socialmedia} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />        
      </Switch>
    </React.Fragment>
  );
}

export default App;
