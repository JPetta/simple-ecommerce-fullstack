'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.hasMany(models.TransactionDetail, { foreignKey: 'transaction_id' });
    }
  }
  Transaction.init({
    transaction_no: DataTypes.STRING,
    total_amount: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN,
    created_user: DataTypes.STRING,
    created_date: DataTypes.DATE,
    updated_user: DataTypes.STRING,
    updated_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};