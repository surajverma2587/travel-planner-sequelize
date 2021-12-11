const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tripBudget: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  travellerAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  travellerId: {
    type: DataTypes.INTEGER,
    references: {
      model: "traveller",
      key: "id",
    },
  },
  locationId: {
    type: DataTypes.INTEGER,
    references: {
      model: "location",
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  freezeTableName: true,
  timestamps: true,
  underscored: false,
  modelName: "trip",
};

class Trip extends Model {}

Trip.init(schema, options);

module.exports = Trip;
