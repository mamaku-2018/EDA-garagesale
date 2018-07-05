exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Items').del()
    .then(function () {
      // Inserts seed entries
      return knex('Items').insert([
        {id: 1, name: 'Mike Mee Goreng', description: 'A fun snack', price: 2.00},
        {id: 2, name: 'Don Teacher', description: 'Our sensei', price: 100000000.00},
        {id: 3, name: 'Deep Dive Dougs', description: 'Wedding speech writer extrodinaire', price: 10000000.00}
      ])
    })
}
