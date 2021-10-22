const { DataTypes } = require("sequelize");
const sequelize = require('../sequelize');

const ApiCallLogsModel = sequelize.define('api_call_logs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  endpoint: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  parameter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  timestamps: false,
  tableName: 'api_call_logs'
});

module.exports = ApiCallLogsModel;