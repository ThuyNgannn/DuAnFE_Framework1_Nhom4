const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentComtroller');
const auth = require('../middleware/auth');  // Import middleware auth
// CRUD routes
router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);


// New routes for comments
router.post('/posts/:postId/comments', auth, commentController.addComment); // Thêm auth middleware để xác thực
router.get('/posts/:postId/comments', commentController.getComments);

module.exports = router;
