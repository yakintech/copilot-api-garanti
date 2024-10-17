// seed.js
const mongoose = require('mongoose');
const Product = require('./models/product');
const Category = require('./models/category');
const City = require('./models/city');

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

const cities = [
  { name: 'Adana' },
  { name: 'Adıyaman' },
  { name: 'Afyonkarahisar' },
  { name: 'Ağrı' },
  { name: 'Amasya' },
  { name: 'Ankara' },
  { name: 'Antalya' },
  { name: 'Artvin' },
  { name: 'Aydın' },
  { name: 'Balıkesir' },
  { name: 'Bilecik' },
  { name: 'Bingöl' },
  { name: 'Bitlis' },
  { name: 'Bolu' },
  { name: 'Burdur' },
  { name: 'Bursa' },
  { name: 'Çanakkale' },
  { name: 'Çankırı' },
  { name: 'Çorum' },
  { name: 'Denizli' },
  { name: 'Diyarbakır' },
  { name: 'Edirne' },
  { name: 'Elazığ' },
  { name: 'Erzincan' },
  { name: 'Erzurum' },
  { name: 'Eskişehir' },
  { name: 'Gaziantep' },
  { name: 'Giresun' },
  { name: 'Gümüşhane' },
  { name: 'Hakkari' },
  { name: 'Hatay' },
  { name: 'Isparta' },
  { name: 'Mersin' },
  { name: 'İstanbul' },
  { name: 'İzmir' },
  { name: 'Kars' },
  { name: 'Kastamonu' },
  { name: 'Kayseri' },
  { name: 'Kırklareli' },
  { name: 'Kırşehir' },
  { name: 'Kocaeli' },
  { name: 'Konya' },
  { name: 'Kütahya' },
  { name: 'Malatya' },
  { name: 'Manisa' },
  { name: 'Kahramanmaraş' },
  { name: 'Mardin' },
  { name: 'Muğla' },
  { name: 'Muş' },
  { name: 'Nevşehir' },
  { name: 'Niğde' },
  { name: 'Ordu' },
  { name: 'Rize' },
  { name: 'Sakarya' },
  { name: 'Samsun' },
  { name: 'Siirt' },
  { name: 'Sinop' },
  { name: 'Sivas' },
  { name: 'Tekirdağ' },
  { name: 'Tokat' },
  { name: 'Trabzon' },
  { name: 'Tunceli' },
  { name: 'Şanlıurfa' },
  { name: 'Uşak' },
  { name: 'Van' },
  { name: 'Yozgat' },
  { name: 'Zonguldak' },
  { name: 'Aksaray' },
  { name: 'Bayburt' },
  { name: 'Karaman' },
  { name: 'Kırıkkale' },
  { name: 'Batman' },
  { name: 'Şırnak' },
  { name: 'Bartın' },
  { name: 'Ardahan' },
  { name: 'Iğdır' },
  { name: 'Yalova' },
  { name: 'Karabük' },
  { name: 'Kilis' },
  { name: 'Osmaniye' },
  { name: 'Düzce' }
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
  await City.deleteMany({});

  const createdCategories = await Category.insertMany(categories);
  products[0].category = createdCategories[0]._id;
  products[1].category = createdCategories[0]._id;
  products[2].category = createdCategories[1]._id;
  products[3].category = createdCategories[2]._id;

  await Product.insertMany(products);
  await City.insertMany(cities);

  console.log('Database seeded!');
  mongoose.connection.close();
}

seedDB();