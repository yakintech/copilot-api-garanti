require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const products = require('./routes/products');
const categories = require('./routes/categories');
const authRoutes = require('./routes/auth');
const cities = require('./routes/cities');
const rateLimit = require('express-rate-limit');
const auth = require('./middleware/auth');
const helmet = require('helmet');
const cors = require('cors');
const winston = require('winston');

const app = express();
const port = process.env.PORT || 3000;

// Logger configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 100 // Her IP için 15 dakika içinde 100 istek
});

app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => logger.info('MongoDB connected...'))
    .catch(err => logger.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', auth, products);
app.use('/api/categories', auth, categories);
app.use('/api/cities', cities);

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});