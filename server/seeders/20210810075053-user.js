'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkInsert('Users', [{
      firstName: 'Yubaraj',
      lastName: 'Poudel',
      email: 'demo@demo.com',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(queryInterface.bulkDelete('Users', null, {}));
  }
};
