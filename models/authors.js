'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    static associate(models) {
      this.hasMany(models.Article, {
        foreignKey:'author_id',
        as: 'articles'
      })
    }
  }

  Authors.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Authors',
    tableName: 'Authors',
    timestamps: true 
  });

  return Authors;
};
