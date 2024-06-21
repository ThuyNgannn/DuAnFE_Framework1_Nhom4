const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middleware/upload'); // Middleware để xử lý upload avatar

// CRUD routes
router.post('/users', upload.single('avatar'), userController.createUser);         // Tạo mới user
router.get('/users', userController.getAllUsers);         // Lấy tất cả users
router.get('/users/:id', userController.getUserById);     // Lấy user theo ID
router.put('/users/:id',upload.single('avatar'), userController.updateUser);      // Cập nhật user theo ID
router.put('/users/:userId/toggle-status', userController.toggleUserStatus);  // Bật/tắt trạng thái user
router.delete('/users/:id', userController.deleteUser);   // Xóa user theo ID

module.exports = router;
