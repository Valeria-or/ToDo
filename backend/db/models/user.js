'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({Notepad}) {
      this.hasMany(Notepad, { foreignKey: "user_id" })
    }
  }
  User.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};