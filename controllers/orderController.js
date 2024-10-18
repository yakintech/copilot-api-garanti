const Order = require('../models/order');
const Product = require('../models/product');

/**
 * Create a new order
 */
const createOrder = async (req, res) => {
    const { user, products } = req.body;

    try {
        // Calculate total amount
        let totalAmount = 0;
        for (const item of products) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({ message: `Product not found: ${item.product}` });
            }
            totalAmount += product.price * item.quantity;
        }

        const order = new Order({
            user,
            products,
            totalAmount
        });

        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/**
 * Get all orders
 */
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('products.product').lean().exec();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * Get order by ID
 */
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('user').populate('products.product').lean().exec();
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * Update order status
 */
const updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order.status = req.body.status;
        await order.save();
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * Get all orders by user
 */
const getOrdersByUser = async (req, res) => {
    console.log(req.params.userId);
    try {
        const orders = await Order.find({ user: req.params.userId }).populate('products.product').lean().exec();
        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrderStatus,
    getOrdersByUser
};