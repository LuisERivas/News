import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiteNavBar from './components/SiteNavBar'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import HomeButton from './components/Buttons/HomeButton';
import LogInButton from './components/Buttons/LoginButton';
import { Row } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SiteNavBar
        
          actionButtons={
          <Row>
            <HomeButton/>
            <LogInButton/>
          </Row>
            }
        
      /> 
      {/* <header className="App-header">
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
      </header> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
