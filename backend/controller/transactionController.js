// transactionController.js
const { Transaction, TransactionDetail } = require('../models');

// Create Transaction
const createTransaction = async (req, res) => {
  try {
    const { transaction_no, total_amount, transactionDetails } = req.body;
    const transaction = await Transaction.create({ transaction_no, total_amount });
    
    // Create TransactionDetails
    await Promise.all(transactionDetails.map(async detail => {
      await TransactionDetail.create({
        transaction_id: transaction.id,
        product_variant_id: detail.product_variant_id,
        price: detail.price,
        qty: detail.qty,
        subtotal: detail.qty * detail.price
      });
    }));

    res.status(201).json({ success: true, transaction });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Read all Transactions with associated TransactionDetails
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: TransactionDetail
    });
    res.status(200).json({ success: true, transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Read a single Transaction by ID with associated TransactionDetails
const getTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByPk(id, {
      include: TransactionDetail
    });
    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    res.status(200).json({ success: true, transaction });
  } catch (error) {
    console.error('Error fetching transaction:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Update Transaction by ID
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { transaction_no, total_amount } = req.body;
  try {
    let transaction = await Transaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    await transaction.update({ transaction_no, total_amount });
    res.status(200).json({ success: true, transaction });
  } catch (error) {
    console.error('Error updating transaction:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Delete Transaction by ID
const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    await transaction.destroy();
    res.status(200).json({ success: true, message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
};
