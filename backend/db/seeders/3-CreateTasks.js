'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tasks", [
      {
        title: "хлеб",
        checked: false,
        notepad_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "молоко",
        checked: false,
        notepad_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "масло",
        checked: false,
        notepad_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "сырок",
        checked: true,
        notepad_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Задача 3",
        checked: false,
        notepad_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Встреча 18:00",
        checked: false,
        notepad_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Помыть посуду",
        checked: true,
        notepad_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Починить кран",
        checked: false,
        notepad_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Купить диски",
        checked: false,
        notepad_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Отвезти на то",
        checked: false,
        notepad_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Поющие в терновнике",
        checked: false,
        notepad_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Мертвые души",
        checked: true,
        notepad_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Богач, бедняк",
        checked: false,
        notepad_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {})
  }
};
