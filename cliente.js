const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./dbconfig');
class Cliente extends Model {}
Cliente.init({
  clienteId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  nome: DataTypes.STRING,
  cpf: DataTypes.STRING
}, { sequelize, modelName: 'cliente', timestamps: false });
sequelize.sync();
module.exports = Cliente;
