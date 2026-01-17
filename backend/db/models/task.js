'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate({Notepad}) {
      this.belongsTo(Notepad, { foreignKey: "notepad_id" })
    }
  }
  Task.init({
    title: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    notepad_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};