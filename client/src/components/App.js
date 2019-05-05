import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Dashboard from './Dashboard';
import About from './About';



class App extends Component {
  constructor() {
    super();
    this.state = {
      keywordSearch: ""
    }
  }

addToBookList = (list) => {
  const newList = Array.from(list);
  this.setState ({
    bookList: newList
  })
}

  render() {
    return (

      <Router>
        <Switch>
          <Route exact path ='/' component={Dashboard} />
          <Route exact path ='/about' component={About} />
          <Route component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
