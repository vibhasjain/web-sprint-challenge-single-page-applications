import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import Pizza from './components/Pizza'

const App = () => {
  return (
    <div>
      <h1>Pizza Shop</h1>
      <nav>
        <Link to="/">Home/</Link>
        <Link to="/pizza">Pizza</Link>
      </nav>
    <br></br>

    <Switch>
      <Route path="/pizza"><Pizza/></Route>
      <Route path="/"><Home/></Route>
    </Switch>
    
     
    </div>
  );
};
export default App;
