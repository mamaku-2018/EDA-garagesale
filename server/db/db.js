const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getItems,
  deleteItem,
  addItem
}

function getItems (testDb) {
  const db = testDb || knex
  return db('Items').select()
}

function addItem (item, testDb) {
  const db = testDb || knex
  return db('Items').insert(item)
}

function deleteItem (id, testDb) {
  const db = testDb || knex
  return db('Items')
    .where('id', id).del()
}
