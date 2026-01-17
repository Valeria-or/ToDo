'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Notepads', [
    {
      title: "Покупки",
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Работа",
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Дом",
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      title: "Машина",
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Книги",
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Notepads');
  }
};
