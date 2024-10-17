require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const products = require('./routes/products');
const categories = require('./routes/categories');
const authRoutes = require('./routes/auth');
const auth = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', auth, products);
app.use('/api/categories', auth, categories);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});