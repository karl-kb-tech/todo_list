const path = require('path')
const express = require('express')
const server = express()

// const apiPriority = require('./routes/todos')
const apiPriority = require('./routes/priority')
// const apiCategory = require('./routes/category')
// const apiComplete = require('./routes/complete')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

// server.use('/api/v1/todos/', apiTodos)
server.use('/api/v1/todos/priority/', apiPriority)
// server.use('/api/v1/todos/category/:category', apiCategory)
// server.use('/api/v1/todos/complete/:is_complete', apiComplete)

module.exports = server