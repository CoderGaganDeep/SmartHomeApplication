"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: 123456789,
        password: "password1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        phone: 987654321,
        password: "password2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        phone: 55555555,
        password: "password3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: 11111111,
        password: "password4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mark Williams",
        email: "mark.williams@example.com",
        phone: 99999999,
        password: "password5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
