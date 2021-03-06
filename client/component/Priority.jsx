import React from 'react'
import { connect } from 'react-redux'

import { priorityTodo } from '../actions'

class Priority extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.priority.map(todos => {
            return (
              <li>{todos.priority}{todos.task}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Priority)