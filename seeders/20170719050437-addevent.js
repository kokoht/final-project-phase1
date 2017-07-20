'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Events', [{
          name: 'Coldplay Concert',
          ticket_price: '430 $',
          venue: 'Dom Hall Avenue 3424, UK',
          date: '2016-11-10',
          status: 'closed',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Katy Perry Live in Sydney',
          ticket_price: '290 $',
          venue: 'Lotte Hall Avenue 3424, Sydney',
          date: '2016-10-10',
          status: 'closed',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Disney On Air',
          ticket_price: '340 $',
          venue: 'Magneto Hall 3424, UK',
          date: '2016-08-10',
          status: 'closed',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Coldplay Comeback Concert',
          ticket_price: '440 $',
          venue: 'ICE Hall 4D, BSD',
          date: '2018-11-10',
          status: 'open',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Justin Bieber Live Concert',
          ticket_price: '410 $',
          venue: 'Wallmark Avenue 342434, UK',
          date: '2017-11-10',
          status: 'open',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Beyonce incoming to Town',
          ticket_price: '565 $',
          venue: 'Wilckiky Hal 3424, Singapore',
          date: '2017-09-10',
          status: 'open',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Taylor Swift Back Home',
          ticket_price: '430 $',
          venue: 'Krauken Kav 3424, Canada',
          date: '2017-12-10',
          status: 'open',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Sean Combs is in the Town',
          ticket_price: '577 $',
          venue: 'Kinokuya Hall 45T, Japan',
          date: '2018-11-02',
          status: 'open',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Broer Simanjuntak',
          ticket_price: '239 $',
          venue: 'Jaya Hall of Good 56G, RajaAmpat',
          date: '2019-01-03',
          status: 'open',
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
return queryInterface.bulkDelete('Events', null, {});

  }
};
