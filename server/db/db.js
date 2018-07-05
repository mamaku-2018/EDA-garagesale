const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getItem,
  deleteItem,
  addItem
}

function getItem (testDb) {
  const db = testDb || knex
  return db('Item').select()
}

function addItem (item, testDb) {
  const db = testDb || knex
  return db('item').insert(item)
}

function deleteItem (id, testDb) {
  const db = testDb || knex
  return db('item')
    .where('id', id).del()
}
