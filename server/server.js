const path = require('path')
const express = require('express')
const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/items', routes)
server.use('/api/v1/auth/register')

module.exports = server
