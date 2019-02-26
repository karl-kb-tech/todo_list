const express = require('express')
const router = express.Router()
const { newTodo, getTodos, getTodoById } = require('../db/todos')

//GET /api/v1/todos
router.get('/', (req, res) => {
  getTodos()
    .then(todos => {
      res.json(todos)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'something went wrong' })
    })
})

//POST /api/v1/todos
router.post('/', (req, res) => {
  const todo = req.body

  newTodo(todo)
    .then(todo => {
      res.redirect('/')
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'something went wrong' })
    })
})

//GET /api/v1/todos/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  getTodoById(id)
    .then(todo => {
      res.json(todo)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'something went wrong' })
    })
})

module.exports = router