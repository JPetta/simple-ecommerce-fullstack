const express = require('express');
const router = express.Router();
const productCategoryController = require('../controller/productCategoryController');

router.post('/', productCategoryController.createProductCategory);
router.get('/', productCategoryController.getAllProductCategories);
router.get('/:id', productCategoryController.getProductCategoryById);
router.put('/:id', productCategoryController.updateProductCategory);
router.delete('/:id', productCategoryController.deleteProductCategory);

module.exports = router;
