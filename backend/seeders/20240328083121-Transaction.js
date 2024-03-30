'use strict';
const fs = require('fs');
const path = require('path');
const { Transaction } = require('../models');

const filePath = path.join(__dirname, '../seed-data/transaction-data.json');
const transactionData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Transaction.bulkCreate(transactionData)
  },

  async down (queryInterface, Sequelize) {
    await Transaction.destroy({truncate : true, cascade : true})
  }
};
