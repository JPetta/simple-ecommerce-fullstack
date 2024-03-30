'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductCategory.hasMany(models.Product, { foreignKey: 'product_category_id' });
    }
  }
  ProductCategory.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    created_user: DataTypes.STRING,
    created_date: DataTypes.DATE,
    updated_user: DataTypes.STRING,
    updated_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductCategory',
  });
  return ProductCategory;
};