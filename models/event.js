"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.belongsTo(models.user, { foreignKey: "user_id" });
      event.belongsTo(models.device, { foreignKey: "device_id" });
    }
  }
  event.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      device_id: { type: DataTypes.INTEGER, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
