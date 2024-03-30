// controllers/productVariantController.js
const { ProductVariant } = require('../models');

// Create a new product variant
exports.createProductVariant = async (req, res) => {
  try {
    const productVariant = await ProductVariant.create(req.body);
    res.status(201).json({ message: 'Product variant created successfully.', productVariant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get all product variants
exports.getAllProductVariants = async (req, res) => {
  try {
    const productVariants = await ProductVariant.findAll();
    res.status(200).json(productVariants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get a single product variant by ID
exports.getProductVariantById = async (req, res) => {
  try {
    const { id } = req.params;
    const productVariant = await ProductVariant.findByPk(id);
    if (!productVariant) {
      return res.status(404).json({ message: 'Product variant not found.' });
    }
    res.status(200).json(productVariant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Update a product variant by ID
exports.updateProductVariantById = async (req, res) => {
  try {
    const { id } = req.params;
    const [updatedRows] = await ProductVariant.update(req.body, { where: { id } });
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Product variant not found.' });
    }
    res.status(200).json({ message: 'Product variant updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Delete a product variant by ID
exports.deleteProductVariantById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await ProductVariant.destroy({ where: { id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Product variant not found.' });
    }
    res.status(200).json({ message: 'Product variant deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};
