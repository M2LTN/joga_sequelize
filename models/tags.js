'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      this.belongsToMany(models.Article, {
        foreignKey: 'tagId',
        through: 'ArticleTags',
        otherKey:'articleId'
      });
      
    }
  }

  Tags.init({
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
    modelName: 'Tags',
    tableName: 'Tags',
    timestamps: true
  });

  return Tags;
};
