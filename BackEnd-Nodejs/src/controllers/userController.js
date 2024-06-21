const User = require('../models/user');

// Tạo mới user
exports.createUser = async (req, res) => {
  try {
    const { email, password, name, studentId } = req.body;
    const avatar = req.file ? `${req.file.filename}` : '/default-avatar.png'; // Lấy đường dẫn của avatar

    // Kiểm tra xem email đã tồn tại chưa
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email đã tồn tại trong hệ thống' });
    }

    // Tạo người dùng mới
    user = new User({
      email,
      password,
      name,
      studentId,
      avatar // Lưu đường dẫn của avatar vào cơ sở dữ liệu
    });

    await user.save();
    res.status(201).json({ message: 'Thêm người dùng thành công!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Thêm người dùng thất bại!!!', error: error.message });
  }
};


// Lấy tất cả users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Lấy user theo ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Cập nhật user theo ID
exports.updateUser = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.avatar = `${req.file.filename}`;
    }
    const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Cập nhật thông tin người dùng thất bại!!!', error: error.message });
  }
};

// Xóa user theo ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Toggle trạng thái của người dùng
exports.toggleUserStatus = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Toggle trạng thái 'đang hoạt động' và 'ngưng hoạt động'
    user.trangThai = user.trangThai === 'đang hoạt động' ? 'ngưng hoạt động' : 'đang hoạt động';
    await user.save(); // Lưu thay đổi vào cơ sở dữ liệu

    res.status(200).json({ trangThai: user.trangThai });
  } catch (error) {
    console.error('Error toggling user status:', error);
    res.status(500).json({ message: 'Server error' });
  }
};





  


