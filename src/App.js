import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header, Home, Projects, Background} from "./components/index";

class App extends Component {
  state = {
    rows: 0,
    cols: 0
  }

  constructor(props) {
    super(props);
    this.state.rows = Math.ceil(window.innerHeight / 300);
    this.state.cols = Math.ceil(window.innerWidth / 300);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
          </Switch>

          <Background rows={this.state.rows} cols={this.state.cols} />
        </div>
      </Router>
    );
  }
}

export default App;
