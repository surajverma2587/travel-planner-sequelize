const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  locationName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  freezeTableName: true,
  timestamps: true,
  underscored: false,
  modelName: "location",
};

class Location extends Model {}

Location.init(schema, options);

module.exports = Location;
