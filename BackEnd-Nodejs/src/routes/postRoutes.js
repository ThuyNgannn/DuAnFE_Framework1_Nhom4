const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const upload = require('../middleware/upload');

// CRUD routes
router.post('/posts', upload.single('image'), postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', upload.single('image'), postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
