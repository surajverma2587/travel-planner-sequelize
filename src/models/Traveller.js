const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
};

const options = {
  sequelize: connection,
  freezeTableName: true,
  timestamps: true,
  underscored: false,
  modelName: "traveller",
};

class Traveller extends Model {}

Traveller.init(schema, options);

module.exports = Traveller;
