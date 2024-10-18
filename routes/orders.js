const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @route POST /api/orders
 * @description Create a new order
 * @returns {Object} 201 - The created order
 * @returns {Error} 400 - Bad request
 */
router.post('/', orderController.createOrder);

/**
 * @route GET /api/orders
 * @description Get all orders
 * @returns {Object} 200 - An array of orders
 * @returns {Error} 500 - Server error
 */
router.get('/', orderController.getAllOrders);

/**
 * @route GET /api/orders/:id
 * @description Get order by ID
 * @returns {Object} 200 - The order
 * @returns {Error} 404 - Order not found
 */
router.get('/:id', orderController.getOrderById);

/**
 * @route PATCH /api/orders/:id
 * @description Update order status
 * @returns {Object} 200 - The updated order
 * @returns {Error} 404 - Order not found
 */
router.patch('/:id', orderController.updateOrderStatus);



router.get('/user/:userId', orderController.getOrdersByUser);

module.exports = router;