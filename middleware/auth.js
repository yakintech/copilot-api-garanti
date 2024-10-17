const multer = require('multer');
const path = require('path');

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
  // Sadece .jpg uzantılı dosyalara izin ver
  if (file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error('Only .jpeg format allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload;