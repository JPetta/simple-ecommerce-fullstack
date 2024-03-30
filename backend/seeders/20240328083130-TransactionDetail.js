'use strict';
const fs = require('fs');
const path = require('path');
const { TransactionDetail } = require('../models');

const filePath = path.join(__dirname, '../seed-data/transaction-detail-data.json');
const transactionDetailData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await TransactionDetail.bulkCreate(transactionDetailData)
  },

  async down (queryInterface, Sequelize) {
    await TransactionDetail.destroy({truncate : "true", cascade : "true"})
  }
};
