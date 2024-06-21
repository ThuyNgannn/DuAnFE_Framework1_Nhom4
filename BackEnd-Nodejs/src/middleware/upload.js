const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    if (!file.originalname || file.originalname.trim() === '') {
      cb(new Error('Missing file name'));
    } else {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  }
});

const upload = multer({ storage: storage });

module.exports = upload;