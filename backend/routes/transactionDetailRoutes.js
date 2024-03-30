const express = require('express');
const router = express.Router();
const transactionDetailController = require('../controller/transactionDetailController');

router.post('/', transactionDetailController.createTransactionDetail);
router.get('/', transactionDetailController.getAllTransactionDetails);
router.get('/:id', transactionDetailController.getTransactionDetailById);
router.put('/:id', transactionDetailController.updateTransactionDetail);
router.delete('/:id', transactionDetailController.deleteTransactionDetail);

module.exports = router;
