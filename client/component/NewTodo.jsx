import React from 'react'
import { connect } from 'react-redux'

import { sendTodo } from '../actions'

class NewTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      task: '',
      priority: 1,
      category: '',
      is_complete: false,
      due_at: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const todo = this.state
    console.log(todo)
    this.props.dispatch(sendTodo(todo))
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form id="todo" onSubmit={this.handleSubmit.bind(this)}>
          <textarea name="task" rows="1" cols="20" placeholder="New Task Here" onChange={this.handleChange.bind(this)} /><br />
          Priority:
          <select form="todo" name="priority" onChange={this.handleChange.bind(this)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br />
          <textarea name="category" rows="1" cols="20" placeholder="category" onChange={this.handleChange.bind(this)} /><br />
          <label for="Due Date:">Due Date:</label>
          <input type="date" name="due_at" onChange={this.handleChange.bind(this)} /><br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTodo)