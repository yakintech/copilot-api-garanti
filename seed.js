// seed.js
const mongoose = require('mongoose');
const Product = require('./models/product');
const Category = require('./models/category');

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Sample Data
const categories = [
  { name: 'Electronics' },
  { name: 'Books' },
  { name: 'Clothing' }
];

const products = [
  { name: 'Laptop', price: 999.99, category: null, stock: 50 },
  { name: 'Smartphone', price: 699.99, category: null, stock: 100 },
  { name: 'Novel', price: 19.99, category: null, stock: 200 },
  { name: 'T-Shirt', price: 9.99, category: null, stock: 300 }
];

// Seed Function
async function seedDB() {
  await Category.deleteMany({});
  await Product.deleteMany({});

  const createdCategories = await Category.insertMany(categories);
  products[0].category = createdCategories[0]._id;
  products[1].category = createdCategories[0]._id;
  products[2].category = createdCategories[1]._id;
  products[3].category = createdCategories[2]._id;

  await Product.insertMany(products);

  console.log('Database seeded!');
  mongoose.connection.close();
}

seedDB();