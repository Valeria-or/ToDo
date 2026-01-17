'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notepad extends Model {

    static associate({User, Task}) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.hasMany(Task, { foreignKey: "notepad_id"})
    }
  }
  Notepad.init({
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notepad',
  });
  return Notepad;
};