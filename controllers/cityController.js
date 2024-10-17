const City = require('../models/city');

/**
 * Get all cities
 */
const getAllCities = async (req, res) => {
  try {
    const cities = await City.find().lean().exec();
    const sanitizedCities = cities.map(city => {
      const { __v, createdAt, updatedAt, ...rest } = city;
      return rest;
    });
    res.json(sanitizedCities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Create a new city
 */
const createCity = async (req, res) => {
  const { name } = req.body;
  const city = new City({ name });

  try {
    const newCity = await city.save();
    const { __v, createdAt, updatedAt, ...sanitizedCity } = newCity.toObject();
    res.status(201).json(sanitizedCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Update a city
 */
const updateCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    const { name } = req.body;
    if (name) city.name = name;
    await city.save();
    const { __v, createdAt, updatedAt, ...sanitizedCity } = city.toObject();
    res.json(sanitizedCity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Delete a city
 */
const deleteCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    await city.remove();
    res.json({ message: 'City deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCities,
  createCity,
  updateCity,
  deleteCity
};