import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import './App.css';
import Homepage from './components/homepage'
import InvestorProfile from './components/InvestorProfile'

class App extends Component {


  



  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/investors/:investorId' component={InvestorProfile}/>
            <Route exact path='/inestors/:investorId/portfolios/:portfolioId' />
          {/* <Route exact path='/investors/:investorId/portfolios/:portfolioIdstocks/:stockId' /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
