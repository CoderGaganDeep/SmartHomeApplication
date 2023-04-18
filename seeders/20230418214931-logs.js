"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "logs",
      [
        {
          user_id: 1,
          device_id: 1,
          type: "error",
          description: "Smart Lock battery low",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          device_id: 2,
          type: "warning",
          description: "Smart Thermostat temperature set too high",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          device_id: 3,
          type: "info",
          description: "Smart Bulb turned on",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          device_id: 4,
          type: "info",
          description: "Smart Speaker playing music",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          device_id: 5,
          type: "error",
          description: "Smart TV not responding",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("logs", null, {});
  },
};
