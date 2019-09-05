import React from 'react';
import './App.css';
import SiteNavBar from './components/SiteNavBar'
import Shop from './components/Shop'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/login'
import Home from './components/Home'
import { Row } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteNavBar/> 
        <Switch>
          {/* <Route path='/' exact component={Home}/> */}
          <Route path='/' exact component={Home}/>
          <Route path='/shop' component={Shop} />
          <Route path='/login' component={Login}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
