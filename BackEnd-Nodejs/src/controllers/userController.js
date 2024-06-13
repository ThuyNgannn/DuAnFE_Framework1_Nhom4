const User = require('../models/user');

// Tạo user mới
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: 'Tạo user thành công!', user });
  } catch (error) {
    res.status(400).send({ message: 'Lỗi khi tạo user', error: error.message });
  }
};

// Lấy tất cả các user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ message: 'Lấy danh sách user thành công!', users });
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi lấy danh sách user', error: error.message });
  }
};

// Lấy một user theo ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'Không tìm thấy user' });
    }
    res.status(200).send({ message: 'Lấy user thành công!', user });
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi lấy user', error: error.message });
  }
};

// Cập nhật một user theo ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send({ message: 'Không tìm thấy user' });
    }
    res.status(200).send({ message: 'Cập nhật user thành công!', user });
  } catch (error) {
    res.status(400).send({ message: 'Lỗi khi cập nhật user', error: error.message });
  }
};

// Xóa một user theo ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'Không tìm thấy user' });
    }
    res.status(200).send({ message: 'Xóa user thành công!', user });
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi xóa user', error: error.message });
  }
};
