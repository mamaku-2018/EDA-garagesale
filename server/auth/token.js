const {sign} = require('jsonwebtoken')

const users = require('../db/users')

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

module.exports = {
  issue
}
