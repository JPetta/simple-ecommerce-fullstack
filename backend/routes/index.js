const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const productVariantRoutes = require('./productVariantRoutes');
const productCategoryRoutes = require('./productCategoryRoutes');
const transactionRoutes = require('./transactionRoutes');
const transactionDetailRoutes = require('./transactionDetailRoutes');
const {authenticate, authorize} = require('../helpers/auth');

router.use('/user', userRoutes);
router.use(authenticate)
router.use('/product-variant', productVariantRoutes);
router.use('/product', productRoutes);
router.use('/product-category', productCategoryRoutes);
router.use('/transaction', transactionRoutes);
router.use('/transaction-detail', transactionDetailRoutes);

module.exports = router;
