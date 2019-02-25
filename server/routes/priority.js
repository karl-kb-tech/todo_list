const express = require('express')
const router = express.Router()
const { getTodobyPriority } = require('../db/todos')

//GET /api/v1/todos/priority/:priority
router.get('/:priority', (req, res) => {

  const priority = req.params.priority

  getTodobyPriority(priority)
    .then(todo => {
      res.json(todo)
    })
    .catch(err => {
      console.log(err)
      res.setStatus(500).json({ error: 'something went wrong' })
    })
})

module.exports = router