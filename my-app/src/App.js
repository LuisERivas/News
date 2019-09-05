import React from 'react';
import './App.css';
import SiteNavBar from './components/SiteNavBar'
import Shop from './components/Shop'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Row } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteNavBar/> 
        <Switch>
          {/* <Route path='/' exact component={Home}/> */}
          <Route path='/shop' component={Shop} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
