// routes/categories.js
const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new category
router.post('/', async (req, res) => {
  const category = new Category({
    name: req.body.name
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET a category by id
router.get('/:id', (req, res) => {
  res.json(res.category);
});

// Update a category by id
router.patch('/:id', async (req, res) => {
  if (req.body.name != null) {
    res.category.name = req.body.name;
  }

  try {
    const updatedCategory = await res.category.save();
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a category by id
router.delete('/:id', async (req, res) => {
  try {
    await res.category.remove();
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;