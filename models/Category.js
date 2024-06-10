const { Model, DataTypes } = require('sequelize');//Import Sequelize's Model and DataTypes
const sequelize = require('../config/connection.js');//Import the Sequelize instance configured with database connection

class Category extends Model { }//// Define a new class 'Category' that extends Sequelize's Model class

// Initialize the 'Category' model with schema definition and configuration
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
