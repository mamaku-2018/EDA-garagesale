exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('Items', function (table) {
    table.increments('id').primary()
    table.string('imageurl')
    table.string('name')
    table.string('description')
    table.decimal('price')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('Items')
}
