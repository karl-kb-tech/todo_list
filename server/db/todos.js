const connection = require('./connection')

function getTodos(testDb) {
  const db = testDb || connection

  return db('todos')
}

function createTodo(todo, testDb) {
  const db = testDb || connection

  return db('todos').insert(todo)
}

function getTodobyPriority(priority, testDb) {
  const db = testDb || connection

  return db('todos').where('priority', priority)
}

module.exports = {
  getTodos,
  createTodo,
  getTodobyPriority
}