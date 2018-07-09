const {sign} = require('jsonwebtoken')

const users = require('../db/users')
const verifyJwt = require('express-jwt')

function issue (req, res, next) {
  const {username} = req.body
  users.getUserByName(username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Auth success',
        token
      })
    })
}

function createToken (user, secret) {
  return sign({
    id: user.id,
    username: user.username
  }, secret, {expiresIn: '2d'})
}

function decode (req, res, next) {
  const obj = {
    secret: getSecret
  }
  verifyJwt(obj)(req, res, next)
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

module.exports = {
  issue,
  decode
}
