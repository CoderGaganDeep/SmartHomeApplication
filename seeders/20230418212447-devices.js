"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "devices",
      [
        {
          user_id: 1,
          name: "Smart Lock",
          type: "Electronic",
          location: "Front Door",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: "Smart Thermostat",
          type: "Climate Control",
          location: "Living Room",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          name: "Smart Bulb",
          type: "Lighting",
          location: "Bedroom",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          name: "Smart Speaker",
          type: "Audio",
          location: "Kitchen",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          name: "Smart TV",
          type: "Visual",
          location: "Living Room",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("devices", null, {});
  },
};
