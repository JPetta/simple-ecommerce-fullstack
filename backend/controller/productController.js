// productController.js
const { Product, ProductCategory } = require('../models'); // Import the Product model

// Controller functions for CRUD operations on products
const productController = {
  // Create a new product
  async createProduct(req, res) {
    try {
      const { name, description, price } = req.body;
      const product = await Product.create({ name, description, price });
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Failed to create product' });
    }
  },

  // Get all products
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll({
        include: ProductCategory
      });
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  },

  // Get a single product by ID
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: ProductCategory
      });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ message: 'Failed to fetch product' });
    }
  },

  // Update a product by ID
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      await product.update({ name, description, price });
      res.json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Failed to update product' });
    }
  },

  // Delete a product by ID
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      await product.destroy();
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Failed to delete product' });
    }
  }
};

module.exports = productController;
