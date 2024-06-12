// const express = require('express');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const auth = require('../middleware/auth');
// const bcrypt = require('bcryptjs');
// const { check, validationResult } = require('express-validator');
// const router = express.Router();

// // Register
// router.post('/register', [
//   check('email', 'Email is required').isEmail(),
//   check('password', 'Password is required').isLength({ min: 6 }),
//   check('name', 'Name is required').not().isEmpty()
// ], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { email, password, name, role } = req.body;
//   try {
//     // Kiểm tra xem email đã tồn tại chưa
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }

//     // Tạo người dùng mới
//     user = new User({
//       email,
//       password,
//       name,
//       role
//     });

//     // Lưu người dùng vào cơ sở dữ liệu, quá trình mã hóa mật khẩu sẽ được thực hiện trong middleware 'pre' của mongoose
//     await user.save();

//     // Tạo JWT payload
//     const payload = {
//       user: {
//         id: user.id,
//         role: user.role
//       }
//     };

//     // Ký JWT và trả về token
//     jwt.sign(
//       payload,
//       'your_jwt_secret', // Thay bằng biến môi trường trong thực tế
//       { expiresIn: '1h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error('Server error', err);
//     res.status(500).send('Server error');
//   }
// });


// // Login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     // console.log("user:",user);
//     // console.log("password:" + password);
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     const payload = { user: { id: user.id, role: user.role } };
//     console.log("payload:",payload);
//     jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
//       if (err) throw err;
//       res.json({ token });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server error');
//   }
// });

// // Logout
// router.post('/logout', auth, (req, res) => {
//   res.json({ msg: 'Logged out successfully' });
// });

// // Get user profile
// router.get('/profile', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }
//     res.json(user);
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// module.exports = router;
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({ email, password,name, role });
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
    // console.log("user:",user);
    // console.log("password:" + password);
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = { 
      user: { 
        id: user.id, 
        role: user.role === 'admin' ? 'admin' : 'user' 
      } 
    };
    
    console.log("payload:",payload);
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

module.exports = router;
