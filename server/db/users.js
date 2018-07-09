// server/db/users.js
const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const connection = require('knex')(config)
const hash = require('../auth/hash')

// const connection = require('./connection')

module.exports = {
  createUser,
  userExists,
  getUserByName
}

function createUser (username, password, conn) {
  const db = conn || connection
  const generateHash = hash.generate(password)
  return db('users')
    .insert({username, hash: generateHash})
}

function userExists (username, conn) {
  const db = conn || connection
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, conn) {
  const db = conn || connection
  return db('users')
    .select()
    .where('username', username)
    .first()
}
