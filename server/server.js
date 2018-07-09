const path = require('path')
const express = require('express')
const routes = require('./routes/routes')
const auth = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/items', routes)
server.use('/api/v1/auth/register', auth)

module.exports = server
