const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @route GET /api/products
 * @description Get all products
 * @returns {Object} 200 - An array of products
 * @returns {Error} 500 - Server error
 */
router.get('/', productController.getAllProducts);

/**
 * @route POST /api/products
 * @description Create a new product
 * @param {string} name - The name of the product
 * @param {number} price - The price of the product
 * @param {string} category - The category ID of the product
 * @param {number} stock - The stock quantity of the product
 * @returns {Object} 201 - The created product
 * @returns {Error} 400 - Bad request
 */
router.post('/', productController.createProduct);

/**
 * @route PATCH /api/products/:id
 * @description Update a product
 * @param {string} id - The ID of the product to update
 * @param {string} [name] - The new name of the product
 * @param {number} [price] - The new price of the product
 * @param {string} [category] - The new category ID of the product
 * @param {number} [stock] - The new stock quantity of the product
 * @returns {Object} 200 - The updated product
 * @returns {Error} 404 - Product not found
 * @returns {Error} 500 - Server error
 */
router.patch('/:id', productController.updateProduct);

/**
 * @route DELETE /api/products/:id
 * @description Delete a product
 * @param {string} id - The ID of the product to delete
 * @returns {Object} 200 - The deleted product
 * @returns {Error} 404 - Product not found
 * @returns {Error} 500 - Server error
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router;