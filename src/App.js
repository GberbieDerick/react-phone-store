import React from 'react';

import {Switch,Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Default from './components/Default';
import Cart from './components/Cart';
import Modal from './components/Modal';


function App() {
  return (
    <React.Fragment>

      
      <Navbar ></Navbar>
      <Switch>
        <Route exact path='/' component={ProductList}></Route>
        <Route path='/cart' component={Cart}></Route>

        <Route path='/details' component={ProductDetail}></Route>
        <Route component={Default}></Route>
              </Switch>
              <Modal />
      

    </React.Fragment>  

    
  );
}

export default App;
