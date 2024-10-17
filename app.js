const express = require('express');
const mongoose = require('mongoose');
const products = require('./routes/products');
const categories = require('./routes/categories');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://techcareer_swift:qSJrSgUN9qfgs0Fa@cluster0.jcus0vv.mongodb.net/garanti-copilot-db')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/api/products', products);
app.use('/api/categories', categories);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
