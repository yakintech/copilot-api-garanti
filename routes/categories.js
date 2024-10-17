const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

/**
 * @route GET /api/categories
 * @description Get all categories
 * @returns {Object} 200 - An array of categories
 * @returns {Error} 500 - Server error
 */
router.get('/', categoryController.getAllCategories);

/**
 * @route POST /api/categories
 * @description Create a new category
 * @param {string} name - The name of the category
 * @returns {Object} 201 - The created category
 * @returns {Error} 400 - Bad request
 */
router.post('/', categoryController.createCategory);

/**
 * @route PATCH /api/categories/:id
 * @description Update a category
 * @param {string} id - The ID of the category to update
 * @param {string} [name] - The new name of the category
 * @returns {Object} 200 - The updated category
 * @returns {Error} 404 - Category not found
 * @returns {Error} 500 - Server error
 */
router.patch('/:id', categoryController.updateCategory);

/**
 * @route DELETE /api/categories/:id
 * @description Delete a category
 * @param {string} id - The ID of the category to delete
 * @returns {Object} 200 - The deleted category
 * @returns {Error} 404 - Category not found
 * @returns {Error} 500 - Server error
 */
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;