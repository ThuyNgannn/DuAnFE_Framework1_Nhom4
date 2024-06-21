const Post = require('../models/post');

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    console.log("Fetching all posts...");
    const posts = await Post.find().populate('categoryId');
    console.log(posts);
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve posts', error: error.message });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('categoryId', 'name');
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve post', error: error.message });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, subtitle, content, author, categoryId, tags, likes } = req.body;
    const post = new Post({ 
      title, 
      subtitle, 
      content, 
      author, 
      categoryId, 
      tags,
      image: req.file ? req.file.filename : null,
      likes: likes || 0
    });
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send({ message: 'Failed to create post', error: error.message });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `${req.file.filename}`;
    }
    const post = await Post.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true }).populate('categoryId', 'name');
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send({ message: 'Failed to update post', error: error.message });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.status(200).send({ message: 'Post deleted successfully', post });
  } catch (error) {
    res.status(500).send({ message: 'Failed to delete post', error: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Bài đăng không tồn tại' });
    }

    // Tăng số lượt thích lên 1 và lưu lại
    post.likes += 1;
    await post.save();

    res.status(200).send({ message: 'Thích bài đăng thành công', post });
  } catch (error) {
    res.status(500).send({ message: 'Lỗi khi thực hiện thao tác thích bài đăng', error: error.message });
  }
};