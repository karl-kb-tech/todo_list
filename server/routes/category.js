const express = require('express')
const router = express.Router()
const { getTodobyCategory } = require('../db/todos')

//GET /api/v1/todos/category/:category
router.get('/:category', (req, res) => {
  const cat = req.params.category

  getTodobyCategory(cat)
    .then(todo => {
      res.json(todo)
    })
    .catch(err => {
      console.log(err)
      res.setStatus(500).json({ error: 'something went wrong' })
    })
})

module.exports = router