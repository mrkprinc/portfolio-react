import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Header, Home, Projects} from "./components/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
