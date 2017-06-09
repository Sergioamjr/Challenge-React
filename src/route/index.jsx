import React, { Component } from 'react';
import Header from '../scene/header'

import Home from '../scene/home'
import Single from '../scene/single'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import css from '../style/style'
import grid from '../style/grid'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
            <Router>
              <div>
                <Header />
                <Route exact path="/" component={Home}/>
                <Route path='/single/:id' component={Single}/>
              </div>
            </Router>
        </div>
    )
  }
}

export default App  