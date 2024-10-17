// seed.js
const mongoose = require('mongoose');
const Product = require('./models/product');
const Category = require('./models/category');
const City = require('./models/city');
const cities = require('./data/cities');

require('dotenv').config();

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
  { name: 'T-Shirt', price: 9.99, category: null, stock: 300 },
  { name: 'Headphones', price: 49.99, category: null, stock: 150 },
  { name: 'Keyboard', price: 29.99, category: null, stock: 80 },
  { name: 'Mouse', price: 19.99, category: null, stock: 120 },
  { name: 'Monitor', price: 199.99, category: null, stock: 60 },
  { name: 'Tablet', price: 299.99, category: null, stock: 90 },
  { name: 'Charger', price: 14.99, category: null, stock: 200 },
  { name: 'Backpack', price: 39.99, category: null, stock: 70 },
  { name: 'Shoes', price: 59.99, category: null, stock: 110 },
  { name: 'Watch', price: 89.99, category: null, stock: 130 },
  { name: 'Camera', price: 499.99, category: null, stock: 40 },
  { name: 'Printer', price: 149.99, category: null, stock: 50 },
  { name: 'Desk Lamp', price: 24.99, category: null, stock: 100 },
  { name: 'Notebook', price: 4.99, category: null, stock: 300 },
  { name: 'Pen', price: 1.99, category: null, stock: 500 },
  { name: 'Water Bottle', price: 9.99, category: null, stock: 150 },
  { name: 'Sunglasses', price: 79.99, category: null, stock: 90 }
];

// Seed Function
async function seedDB() {
  await Category.deleteMany({});
  await Product.deleteMany({});
  await City.deleteMany({});

  const createdCategories = await Category.insertMany(categories);
  products[0].category = createdCategories[0]._id;
  products[1].category = createdCategories[0]._id;
  products[2].category = createdCategories[1]._id;
  products[3].category = createdCategories[2]._id;
  products[4].category = createdCategories[0]._id;
  products[5].category = createdCategories[0]._id;
  products[6].category = createdCategories[0]._id;
  products[7].category = createdCategories[0]._id;
  products[8].category = createdCategories[0]._id;
  products[9].category = createdCategories[0]._id;
  products[10].category = createdCategories[2]._id;
  products[11].category = createdCategories[2]._id;
  products[12].category = createdCategories[2]._id;
  products[13].category = createdCategories[0]._id;
  products[14].category = createdCategories[0]._id;
  products[15].category = createdCategories[0]._id;
  products[16].category = createdCategories[1]._id;
  products[17].category = createdCategories[1]._id;
  products[18].category = createdCategories[0]._id;
  products[19].category = createdCategories[2]._id;

  await Product.insertMany(products);
  await City.insertMany(cities);

  console.log('Database seeded!');
  mongoose.connection.close();
}

seedDB();