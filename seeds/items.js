exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Items').del()
    .then(function () {
      // Inserts seed entries
      return knex('Items').insert([
        {id: 1, imageurl: '/images/migoreng.jpg', name: 'Mi Goreng', description: 'A fun snack with little to no nutritional value', price: 2.00},
        {id: 2, imageurl: '/images/don.jpg', name: 'Don Teacher', description: 'Our sensei', price: 10000000.00},
        {id: 3, imageurl: '/images/dougal.jpg', name: 'Deep Dive Dougs', description: 'Wedding speech writer extrodinaire', price: 10000000.00},
        {id: 4, imageurl: '/images/firstaid.jpg', name: 'First Aid Kit', description: 'For all your injury and sickness needs', price: 16.00},
        {id: 5, imageurl: '/images/bin.jpg', name: 'Recycling Bin', description: 'Put your recycling in here then watch as it goes and sits in a warehouse in south auckland for 3 years', price: 3.50},
        {id: 6, imageurl: '/images/coffeecup.jpg', name: 'Dirty My Food Bag Coffee Cup', description: 'Once used by legendary coder Mike Mitchelson', price: 0.50},
        {id: 7, imageurl: '/images/edasign.jpg', name: 'EDA Signage', description: 'Pretend your bedroom is a web dev classroom! Teach your teddies!', price: 10.00},
        {id: 8, imageurl: '/images/knickknacks.jpg', name: 'Assorted knick knacks', description: 'Includes original EDA toilet rolls with handrawn artworks, plus other weird things Don likes', price: 1.00},
        {id: 9, imageurl: '/images/emergency.jpg', name: 'Emergency Evacuation Procedures', description: 'For all life-saving escape procedures', price: 4000.00},
        {id: 10, imageurl: '/images/wine.jpg', name: 'Half Drunk bottle of wine', description: 'Slightly off and acidic tasting', price: 230.00}
      ])
    })
}
