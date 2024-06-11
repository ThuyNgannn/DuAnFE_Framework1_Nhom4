const Post = require('../models/post');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
