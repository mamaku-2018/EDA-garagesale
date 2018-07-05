const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getItem,
  editItem,
  deleteItem
}

function getItem (testDb) {
  const db = testDb || knex
  return db('Item').select()
}

function editItem (item, testDb) {
  const db = testDb || knex
  return db('item')
    .where('id', item.id).update(item)
}

function deleteItem (id, testDb) {
  const db = testDb || knex
  return db('item')
    .where('id', id).del()
}
