const express = require('express')
const router = express.Router()
const { getTodos, getTodoById } = require('../db/todos')

//GET /api/v1/todos
router.get('/', (req, res) => {
  getTodos()
    .then(todos => {
      res.json(todos)
    })
    .catch(err => {
      console.log(err)
      res.setStatus(500).json({ error: 'something went wrong' })
    })
})

//POST /api/v1/todos
router.post('/', (req, res) => {
  res.json('post is working')
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
      res.setStatus(500).json({ error: 'something went wrong' })
    })
})

module.exports = router