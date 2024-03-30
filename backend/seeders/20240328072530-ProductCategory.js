'use strict';

const fs = require('fs');
const path = require('path');
const { ProductCategory } = require('../models');

const filePath = path.join(__dirname, '../seed-data/product-category-data.json');
const productCategoryData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await ProductCategory.bulkCreate(productCategoryData)
  },

  async down (queryInterface, Sequelize) {
    await ProductCategory.destroy({ truncate: true, cascade: true });
  }
};
