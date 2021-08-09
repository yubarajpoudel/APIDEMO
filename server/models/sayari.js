'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sayari extends Model {
    static associate(models) {
      Sayari.belongsTo(models.category, {foreignKey: 'categoryId'})
    }
  };
  Sayari.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sayari',
  });
  return Sayari;
};