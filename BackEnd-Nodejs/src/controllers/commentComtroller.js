// controllers/commentController.js
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

// Add a comment to a post
exports.addComment = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    const userId = req.user.id; // Lấy userId từ middleware xác thực

    const newComment = new Comment({ userId, postId, comment });
    await newComment.save();

    await Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });
    await User.findByIdAndUpdate(userId, { $push: { comments: newComment._id } });

    res.status(201).send(newComment);
  } catch (error) {
    res.status(400).send({ message: 'Failed to add comment', error: error.message });
  }
};

// Get comments of a post
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).populate('userId', 'username');
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve comments', error: error.message });
  }
};
