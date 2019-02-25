const express = require('express')
const router = express.Router()
const { getTodos } = require('../db/todos')

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

//GET /api/v1/todos/:todos
router.get('/:toodos', (req, res) => {
  res.json([
    {
      task: 'get coke',
      priority: 1,
      category: "food & drink",
      is_complete: false,
      due_at: 1551135600
    }
  ])
})

module.exports = router