'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      this.hasOne(models.Instrutor, {
        as: 'instrutor',
        foreignKey: 'id'
      })
    }
  }
  Curso.init({
    nome_curso: DataTypes.STRING,
    descricao: DataTypes.STRING,
    instrutorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'curso'
  });
  return Curso;
};