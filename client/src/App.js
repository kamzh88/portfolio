import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Component/NavBar';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default App;
