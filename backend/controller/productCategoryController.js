// productCategoryController.js
const { ProductCategory, Product } = require('../models');

// Create ProductCategory
const createProductCategory = async (req, res) => {
  try {
    const { name, active } = req.body;
    const productCategory = await ProductCategory.create({ name, active });
    res.status(201).json({ success: true, productCategory });
  } catch (error) {
    console.error('Error creating product category:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Read all ProductCategories with associated Products
const getAllProductCategories = async (req, res) => {
  try {
    const productCategories = await ProductCategory.findAll();
    res.status(200).json({ success: true, productCategories });
  } catch (error) {
    console.error('Error fetching product categories:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Read a single ProductCategory by ID with associated Products
const getProductCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const productCategory = await ProductCategory.findByPk(id, {
      include: Product
    });
    if (!productCategory) {
      return res.status(404).json({ success: false, message: 'Product category not found' });
    }
    res.status(200).json({ success: true, productCategory });
  } catch (error) {
    console.error('Error fetching product category:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Update ProductCategory by ID
const updateProductCategory = async (req, res) => {
  const { id } = req.params;
  const { name, active } = req.body;
  try {
    let productCategory = await ProductCategory.findByPk(id);
    if (!productCategory) {
      return res.status(404).json({ success: false, message: 'Product category not found' });
    }
    productCategory.name = name;
    productCategory.active = active;
    await productCategory.save();
    res.status(200).json({ success: true, productCategory });
  } catch (error) {
    console.error('Error updating product category:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Delete ProductCategory by ID
const deleteProductCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const productCategory = await ProductCategory.findByPk(id);
    if (!productCategory) {
      return res.status(404).json({ success: false, message: 'Product category not found' });
    }
    await productCategory.destroy();
    res.status(200).json({ success: true, message: 'Product category deleted successfully' });
  } catch (error) {
    console.error('Error deleting product category:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  createProductCategory,
  getAllProductCategories,
  getProductCategoryById,
  updateProductCategory,
  deleteProductCategory
};
