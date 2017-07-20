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
    return queryInterface.bulkInsert('EventUsers', [{
      EventId: 1,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      EventId: 1,
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      EventId: 1,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      EventId: 2,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      EventId: 2,
      UserId: 2,
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
    return queryInterface.bulkDelete('EventUsers', null, {});
  }
};
