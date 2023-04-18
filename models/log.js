"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      log.belongsTo(models.user, { foreignKey: "user_id" });
      log.belongsTo(models.device, { foreignKey: "device_id" });
    }
  }
  log.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      device_id: { type: DataTypes.INTEGER, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "log",
    }
  );
  return log;
};
