const express = require('express')
const router = express.Router()
const token = require('../auth/token')

const users = require('../db/users')

function register (req, res, next) {
  const {username, password} = req.body
  users.userExists(username)
    .then((resp) => {
      if (resp) {
        res.status(400).json({message: 'User exists'})
      } else {
        users.createUser(username, password)
          .then(() => next())
      }
    })
    .catch((err) => {
      res.status(500).json({message: err.message})
    })
}

router.post('/register', register, token.issue)

router.get('/username', token.decode, (req, res) => {
  res.json({
    username: req.user.username
  })
})

module.exports = router
