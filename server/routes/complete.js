const express = require('express')
const router = express.Router()
const { getTodoIsComplete } = require('../db/todos')

//GET /api/v1/todos/complete/:is_complete
router.get('/:complete', (req, res) => {
  const comp = req.params.complete

  getTodoIsComplete(comp)
    .then(todo => {
      res.json(todo)
    })
    .catch(err => {
      console.log(err)
      res.setStatus(500).json({ error: 'something went wrong' })
    })
})

module.exports = router