'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
    {
      name: "oreh",
      login: "oreh@oreh",
      password: "2525",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "pok",
      login: "pok@pok",
      password: "123",
      createdAt: new Date(),
      updatedAt: new Date()
    },

], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  
  }
};
