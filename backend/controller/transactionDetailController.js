// transactionDetailController.js
const { TransactionDetail, Transaction } = require('../models');

// Create TransactionDetail
const createTransactionDetail = async (req, res) => {
  try {
    const { transaction_id, product_variant_id, price, qty } = req.body;
    const transactionDetail = await TransactionDetail.create({ transaction_id, product_variant_id, price, qty });
    res.status(201).json({ success: true, transactionDetail });
  } catch (error) {
    console.error('Error creating transaction detail:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Read all TransactionDetails with associated Transaction
const getAllTransactionDetails = async (req, res) => {
  try {
    const transactionDetails = await TransactionDetail.findAll({
      include: Transaction
    });
    res.status(200).json({ success: true, transactionDetails });
  } catch (error) {
    console.error('Error fetching transaction details:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Read a single TransactionDetail by ID with associated Transaction
const getTransactionDetailById = async (req, res) => {
  const { id } = req.params;
  try {
    const transactionDetail = await TransactionDetail.findByPk(id, {
      include: Transaction
    });
    if (!transactionDetail) {
      return res.status(404).json({ success: false, message: 'Transaction detail not found' });
    }
    res.status(200).json({ success: true, transactionDetail });
  } catch (error) {
    console.error('Error fetching transaction detail:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Update TransactionDetail by ID
const updateTransactionDetail = async (req, res) => {
  const { id } = req.params;
  const { transaction_id, product_variant_id, price, qty } = req.body;
  try {
    let transactionDetail = await TransactionDetail.findByPk(id);
    if (!transactionDetail) {
      return res.status(404).json({ success: false, message: 'Transaction detail not found' });
    }
    await transactionDetail.update({ transaction_id, product_variant_id, price, qty });
    res.status(200).json({ success: true, transactionDetail });
  } catch (error) {
    console.error('Error updating transaction detail:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Delete TransactionDetail by ID
const deleteTransactionDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const transactionDetail = await TransactionDetail.findByPk(id);
    if (!transactionDetail) {
      return res.status(404).json({ success: false, message: 'Transaction detail not found' });
    }
    await transactionDetail.destroy();
    res.status(200).json({ success: true, message: 'Transaction detail deleted successfully' });
  } catch (error) {
    console.error('Error deleting transaction detail:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  createTransactionDetail,
  getAllTransactionDetails,
  getTransactionDetailById,
  updateTransactionDetail,
  deleteTransactionDetail
};
