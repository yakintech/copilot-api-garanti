const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Dosya yükleme ayarları
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  // Sadece .jpeg ve .jpg uzantılı dosyalara izin ver
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error('Only .jpeg format allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
}).single('profileImage');

// Kullanıcı kaydı
router.post('/register', async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { username, password } = req.body;

    // Doğrulama
    if (!username || !password) {
      if (req.file) {
        fs.unlinkSync(req.file.path); // Yüklenen dosyayı sil
      }
      return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
      const profileImage = req.file ? req.file.path : null;

      const newUser = new User({
        username,
        password,
        profileImage
      });

      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      if (req.file) {
        fs.unlinkSync(req.file.path); // Yüklenen dosyayı sil
      }
      res.status(400).json({ error: error.message });
    }
  });
});

// Kullanıcı girişi
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;