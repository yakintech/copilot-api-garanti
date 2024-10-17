const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

/**
 * @route GET /api/cities
 * @description Get all cities
 * @returns {Object} 200 - An array of cities
 * @returns {Error} 500 - Server error
 */
router.get('/', cityController.getAllCities);

/**
 * @route POST /api/cities
 * @description Create a new city
 * @param {string} name - The name of the city
 * @returns {Object} 201 - The created city
 * @returns {Error} 400 - Bad request
 */
router.post('/', cityController.createCity);

/**
 * @route PATCH /api/cities/:id
 * @description Update a city
 * @param {string} id - The ID of the city to update
 * @param {string} [name] - The new name of the city
 * @returns {Object} 200 - The updated city
 * @returns {Error} 404 - City not found
 * @returns {Error} 500 - Server error
 */
router.patch('/:id', cityController.updateCity);

/**
 * @route DELETE /api/cities/:id
 * @description Delete a city
 * @param {string} id - The ID of the city to delete
 * @returns {Object} 200 - The deleted city
 * @returns {Error} 404 - City not found
 * @returns {Error} 500 - Server error
 */
router.delete('/:id', cityController.deleteCity);

module.exports = router;