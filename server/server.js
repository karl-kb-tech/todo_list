const path = require('path')
const express = require('express')
const server = express()

const apiPriority = require('./routes/todos')
// const apiCategory = require('./routes/category.js')
// const apiComplete = require('./routes/complete.js')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/api/v1/priority/', apiPriority)
// server.use('/api/v1/category/:category', apiCategory)
// server.use('/api/v1/complete/:is_complete', apiComplete)

module.exports = server