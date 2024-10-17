require('dotenv').config(); // Çevresel değişkenleri yükler
const express = require('express');
const mongoose = require('mongoose');
const products = require('./routes/products');
const categories = require('./routes/categories');

const app = express();
const port = process.env.PORT || 3000; // Çevresel değişkenlerden portu alır

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
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