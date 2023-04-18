"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class configuration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      configuration.belongsTo(models.user, { foreignKey: "user_id" });
      configuration.belongsTo(models.device, { foreignKey: "device_id" });
    }
  }
  configuration.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      device_id: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      settings: { type: DataTypes.JSON, allowNull: false },
    },
    {
      sequelize,
      modelName: "configuration",
    }
  );
  return configuration;
};
