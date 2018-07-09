const express = require('express')
const router = express.Router()

const users = require('../db/users')

function register (req, res, next) {
  const {username, password} = req.body
  users.userExists(username)
    .then((resp) => {
      if (resp) {
        res.status(400).json({message: 'User exists'})
      } else {
        users.createUser(username, password)
          .then(() => res.status(201).end())
      }
    })
    .catch((err) => {
      res.status(500).json({message: err.message})
    })
}

router.post('/', register)

module.exports = router
