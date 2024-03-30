'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransactionDetail.belongsTo(models.Transaction, { foreignKey: 'transaction_id' });
      TransactionDetail.belongsTo(models.ProductVariant, { foreignKey: 'product_variant_id' });

    }
  }
  TransactionDetail.init({
    transaction_id: DataTypes.INTEGER,
    product_variant_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    qty: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN,
    created_user: DataTypes.STRING,
    created_date: DataTypes.DATE,
    updated_user: DataTypes.STRING,
    updated_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TransactionDetail',
  });
  return TransactionDetail;
};