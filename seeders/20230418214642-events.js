"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          user_id: 1,
          device_id: 1,
          type: "Lock",
          description: "Locked the front door",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          device_id: 2,
          type: "Temperature Change",
          description: "Set temperature to 22 degree Celsius",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          device_id: 3,
          type: "Switch On",
          description: "Switched on the bedroom light",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          device_id: 4,
          type: "Audio Play",
          description: "Played music in the kitchen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          device_id: 5,
          type: "Video Play",
          description: "Played a movie on the living room TV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
  },
};
