import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
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
          {this.props.todos.map(todos => {
            return (
              <li>{todos.task}</li>
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

export default connect(mapStateToProps)(Home)