const Post = require('../models/post');

// Tạo bài viết mới
exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send({ message: 'Tạo bài viết thành công!', post });
  } catch (error) {
    res.status(400).send({ message: 'Lỗi khi tạo bài viết', error });
  }
};

// Lấy tất cả các bài viết
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send({ message: 'Lấy danh sách bài viết thành công!', posts });
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi lấy danh sách bài viết', error });
  }
};

// Lấy một bài viết theo ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Không tìm thấy bài viết' });
    }
    res.status(200).send({ message: 'Lấy bài viết thành công!', post });
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi lấy bài viết', error });
  }
};

// Cập nhật một bài viết theo ID
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) {
      return res.status(404).send({ message: 'Không tìm thấy bài viết' });
    }
    res.status(200).send({ message: 'Cập nhật bài viết thành công!', post });
  } catch (error) {
    res.status(400).send({ message: 'Lỗi khi cập nhật bài viết', error });
  }
};

// Xóa một bài viết theo ID
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Không tìm thấy bài viết' });
    }
    res.status(200).send({ message: 'Xóa bài viết thành công!', post });
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi xóa bài viết', error });
  }
};
