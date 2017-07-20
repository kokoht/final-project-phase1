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
    return queryInterface.bulkInsert('Users', [{
      fullname: 'john does',
      email: 'john@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'jimmy roger',
      email: 'jimmy@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'raga kusumo',
      email: 'raga@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'osikin roger',
      email: 'osi123@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'budi raharjo',
      email: 'budi@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'Cintia Atminari',
      email: 'atmi222@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'Diky tejo',
      email: 'tejo@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'Emily blunt',
      email: 'emi32424@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'fifi sukma',
      email: 'fifif@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'gunawan taniraja',
      email: 'gungun@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'H rahmat legawa',
      email: 'rahmat@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'abank rimikin',
      email: 'abank@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'ciamis rahmat',
      email: 'cici234@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'jonathan gerald',
      email: 'jgerald@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'kusumo wijaya',
      email: 'wiwikus@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'lilik sutanto',
      email: 'liksus@gmail.com',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
