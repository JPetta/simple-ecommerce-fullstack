const express = require('express');
const router = express.Router();
const productVariantController = require('../controller/productVariantController');

router.post('/', productVariantController.createProductVariant);
router.get('/', productVariantController.getAllProductVariants);
router.get('/:id', productVariantController.getProductVariantById);
router.put('/:id', productVariantController.updateProductVariantById);
router.delete('/:id', productVariantController.deleteProductVariantById);

module.exports = router;
