const express = require('express')
const router = express.Router()

//GET /api/v1/priority
router.get('/', (req, res) => {
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

//POST /api/v1/priority
router.post('/', (req, res) => {
  res.json('post is working')
})

//GET /api/v1/priority/:priority
router.get('/:priority', (req, res) => {
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