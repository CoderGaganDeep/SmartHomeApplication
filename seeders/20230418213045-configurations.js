"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "configurations",
      [
        {
          user_id: 1,
          device_id: 1,
          name: "Lock Configuration",
          settings: JSON.stringify({
            access_code: "1234",
            auto_lock: true,
            lock_sound: false,
          }),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          device_id: 2,
          name: "Thermostat Configuration",
          settings: JSON.stringify({
            temperature: 72,
            mode: "heat",
            fan: "auto",
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          device_id: 3,
          name: "Bulb Configuration",
          settings: JSON.stringify({
            brightness: 50,
            color: "white",
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          device_id: 4,
          name: "Speaker Configuration",
          settings: JSON.stringify({
            volume: 70,
            equalizer: "pop",
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          device_id: 5,
          name: "TV Configuration",
          settings: JSON.stringify({
            channel: 10,
            volume: 60,
            aspect_ratio: "16:9",
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("configurations", null, {});
  },
};
