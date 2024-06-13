const Post = require('../models/post');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send({ message: 'Failed to create post', error: error.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    console.log("Fetching all posts...");
    const posts = await Post.find();
    console.log(posts);
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve posts', error: error.message });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve post', error: error.message });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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
