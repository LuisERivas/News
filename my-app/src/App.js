import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiteNavBar from './components/SiteNavBar'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Row } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteNavBar/> 
      
      </BrowserRouter>
    </div>
  );
}

export default App;
