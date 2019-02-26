import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { connect } from "react-redux"

import Home from './Home'
import Priority from './Priority'
import NewTodo from './NewTodo'
import Nav from './Nav'
import { getTodos } from '../actions'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getTodos())
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Nav />
          </div>
          <div>
            <h1>You have TODOS waiting!!</h1>

            <Route exact path="/" component={Home} />
            <Route path="/priority/:priority" component={Priority} />
            <Route path="/newtodo" component={NewTodo} />

          </div>
        </div>
      </Router>
    )
  }
}

export default connect()(App)