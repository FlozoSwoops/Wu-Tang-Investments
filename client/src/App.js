import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import './App.css';
import Homepage from './components/homepage'

class App extends Component {


  // state = {
  //   investors: [],
  // }


  // async componentWillMount() {
  //   try {
  //     const response = await axios.get("api/investors")
  //     this.setState({ investors: response.data })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/investors/:investorId' component={InvestorProfile}/>
          {/* <Route exact path='/investors/:investorId/stocks/:stockId' /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
