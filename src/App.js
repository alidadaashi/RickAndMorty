import React , {Component, useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Characters from './components/Characters'
import Locations from './components/Locations'
import Episodes from './components/Episodes'
import {BrowserRouter, Route} from "react-router-dom"
const App = ()=> {
  
    return (
      <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/locations" exact component={Locations} />
      <Route path="/episodes" exact component={Episodes} />
      <Route path="/characters" exact component={Characters} />
      
        
      </BrowserRouter>
    );
  }

export default App;
