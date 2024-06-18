'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrutor extends Model {
    static associate(models) {
      this.belongsTo(models.Curso, {
        as: 'curso',
        foreignKey: 'id'
      })
    }
  }
  Instrutor.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nasc: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Instrutor',
    tableName: 'instrutor'
  });
  return Instrutor;
};