"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      device.belongsTo(models.user, { foreignKey: "user_id" });
      device.hasMany(models.configuration, { foreignKey: "device_id" });
      device.hasMany(models.event, { foreignKey: "device_id" });
      device.hasMany(models.log, { foreignKey: "device_id" });
    }
  }
  device.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      type: { type: DataTypes.STRING },
      location: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "device",
    }
  );
  return device;
};
