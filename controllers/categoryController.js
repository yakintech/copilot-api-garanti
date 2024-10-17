const Category = require('../models/category');

/**
 * Get all categories
 */
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().lean().exec();
    const sanitizedCategories = categories.map(category => {
      const { __v, createdAt, updatedAt, ...rest } = category;
      return rest;
    });
    res.json(sanitizedCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Create a new category
 */
const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });

  try {
    const newCategory = await category.save();
    const { __v, createdAt, updatedAt, ...sanitizedCategory } = newCategory.toObject();
    res.status(201).json(sanitizedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Update a category
 */
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    const { name } = req.body;
    if (name) category.name = name;
    await category.save();
    const { __v, createdAt, updatedAt, ...sanitizedCategory } = category.toObject();
    res.json(sanitizedCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Delete a category
 */
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    await category.remove();
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
};