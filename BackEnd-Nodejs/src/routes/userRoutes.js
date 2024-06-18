const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD routes
router.post('/users', userController.createUser);         // Tạo mới user
router.get('/users', userController.getAllUsers);         // Lấy tất cả users
router.get('/users/:id', userController.getUserById);     // Lấy user theo ID
router.put('/users/:id', userController.updateUser);      // Cập nhật user theo ID
router.put('/users/:userId/toggle-status', userController.toggleUserStatus);  // Bật/tắt trạng thái user
router.delete('/users/:id', userController.deleteUser);   // Xóa user theo ID

module.exports = router;
