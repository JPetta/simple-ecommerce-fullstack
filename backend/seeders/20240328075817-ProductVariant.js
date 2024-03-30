'use strict';
const fs = require('fs');
const path = require('path');
const { ProductVariant } = require('../models');

const filePath = path.join(__dirname, '../seed-data/product-variant-data.json');
const productVariantData = JSON.parse(fs.readFileSync( filePath, 'utf8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await ProductVariant.bulkCreate(productVariantData)
  },

  async down (queryInterface, Sequelize) {
    await ProductVariant.destroy({ truncate: true, cascade: true });
  }
};
