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
     queryInterface.bulkInsert('Categories', [{
       'title':'Daily News',
       'description':'All latest daily news',
       'createdAt': new Date(),
       'updatedAt': new Date()
     }], {})
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category', null, {});
  }
};
