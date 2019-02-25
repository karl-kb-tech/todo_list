module.exports = {
  getTodos,
  createTodo,
  getTodobyPriority,
  getTodobyCategory,
  getTodoIsComplete
}

const connection = require('./connection')

function getTodos(testDb) {
  const db = testDb || connection

  return db('todos')
}

function createTodo(todo, testDb) {
  const db = testDb || connection

  return db('todos')
    .insert(todo)
}

function getTodobyPriority(priority, testDb) {
  const db = testDb || connection

  return db('todos')
    .where('priority', priority)
}

function getTodobyCategory(cat, testDb) {
  const db = testDb || connection

  return db('todos')
    .where('category', cat)

}

function getTodoIsComplete(comp, testDb) {
  const db = testDb || connection

  return db('todos')
    .where('is_complete', comp)
}