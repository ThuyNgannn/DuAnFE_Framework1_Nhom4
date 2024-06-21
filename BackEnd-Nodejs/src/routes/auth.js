const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, password, name, role, studentId } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({ email, password, name, role, studentId });
    await user.save();

    const payload = { user: { id: user.id, role: user.role } };
    jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = { user: { id: user.id, role: user.role } };
    console.log("payload:", payload);
    jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

// Logout
router.post('/logout', auth, (req, res) => {
  res.json({ msg: 'Logged out successfully' });
});

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

//Cập nhật avatar của người dùng
router.put('/profile/avatar', auth, upload.single('avatar'), async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;

    if (!userId) {
      return res.status(400).json({ message: 'Missing user ID' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Missing avatar file' });
    }

    const avatar = req.file.filename; // Lấy tên file avatar đã lưu vào uploads folder

    // Cập nhật avatar của người dùng trong cơ sở dữ liệu
    const updatedUser = await User.findByIdAndUpdate(userId, { avatar }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update avatar', error: error.message });
  }
});


module.exports = router;
