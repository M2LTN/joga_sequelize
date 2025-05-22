'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    static associate(models) {
      // define relationships here, e.g.
      // Authors.hasMany(models.Articles, { foreignKey: 'author_id', as: 'articles' });
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
    timestamps: true // või false kui ei kasuta createdAt/updatedAt
  });

  return Authors;
};
