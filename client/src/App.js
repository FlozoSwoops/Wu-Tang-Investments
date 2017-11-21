import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import './App.css';
import Homepage from './components/homepage'
import InvestorProfile from './components/InvestorProfile'
import PortfolioShow from './components/PortfolioShow'
import NavBar from './components/NavBar'
import StockGraphs from './components/StockGraphs'
class App extends Component {






  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/investors/:investorId' component={InvestorProfile} />
            <Route exact path='/investors/:investorId/portfolios/:portfolioId' component={PortfolioShow} />
            {/* <Route exact path='/investors/:investorId/portfolios/:portfolioId/stocks/:stockId' /> */}
            <Route exact path='/graphs' component={StockGraphs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
