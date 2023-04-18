"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "$2b$10$yCfUbGOrRmU7VZupKj.X4OX4hY/l8pmvzVbiOx2ViS5yz12N5X5C", // Hashed password: "password"
        phone: 909871625,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "$2b$10$yCfUbGOrRmU7VZupj.X4OX4hY/l8pmvzVbiOx2NViS5yz12N5X5C", // Hashed password: "password"
        phone: 809832625,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        password: "$2b$10$yCfUbGOrRm7VZupKj.X4OX4hY/l8pmvzVbiOx2NViS5yz12N5X5C", // Hashed password: "password"
        phone: 69876543,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
