'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('Roles', [
        { name: "user", createdAt: new Date(), updatedAt: new Date()},
        { name: "moderator", createdAt: new Date(), updatedAt: new Date()},
        { name: "admin", createdAt: new Date(), updatedAt: new Date()},
      ], {})
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Roles', null, {})
    ]);
  }
};
