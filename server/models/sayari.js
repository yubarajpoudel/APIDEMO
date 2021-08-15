'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sayari extends Model {
    static associate(models) {
      Sayari.belongsTo(models.category, 
        {
          foreignKey: { allowNull: false }
        });
    }
  };
  Sayari.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Sayari',
  });
  return Sayari;
};