require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const products = require('./routes/products');
const categories = require('./routes/categories');
const authRoutes = require('./routes/auth');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 100 // Her IP için 15 dakika içinde 100 istek
});

app.use(limiter);
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', products);
app.use('/api/categories', categories);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});