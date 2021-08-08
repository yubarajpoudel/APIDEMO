'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'categories',
        'thumbnail',
        Sequelize.STRING),

      queryInterface.addColumn(
        'categories',
        'description',
        Sequelize.TEXT
      )
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'categories',
        'thumbnail'),

      queryInterface.removeColumn(
        'categories',
        'description'
      )
    ]);
  }
};
