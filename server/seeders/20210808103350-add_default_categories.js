'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return Promise.all([
     queryInterface.bulkInsert('categories', [{
       'title':'love diary',
       'description':'All latest love sayari',
       'createdAt': new Date(),
       'updatedAt': new Date()
     }], {})
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
