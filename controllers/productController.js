const Product = require('../models/product');

/**
 * Get all products
 */
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category').lean().exec();
    const sanitizedProducts = products.map(product => {
      const { __v, createdAt, updatedAt, ...rest } = product;
      return rest;
    });
    res.json(sanitizedProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Create a new product
 */
const createProduct = async (req, res) => {
  const { name, price, category, stock } = req.body;
  const product = new Product({
    name,
    price,
    category,
    stock
  });

  try {
    const newProduct = await product.save();
    const { __v, createdAt, updatedAt, ...sanitizedProduct } = newProduct.toObject();
    res.status(201).json(sanitizedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Update a product
 */
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const { name, price, category, stock } = req.body;
    if (name) product.name = name;
    if (price) product.price = price;
    if (category) product.category = category;
    if (stock !== undefined) product.stock = stock;
    await product.save();
    const { __v, createdAt, updatedAt, ...sanitizedProduct } = product.toObject();
    res.json(sanitizedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Delete a product
 */
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.remove();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//get product by id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category').lean().exec();
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const { __v, createdAt, updatedAt, ...sanitizedProduct } = product;
    res.json(sanitizedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById
};