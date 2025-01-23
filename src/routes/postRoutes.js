
const express = require('express');  // Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const { getAllPosts, createPost } = require('../controllers/postController');
const { validateToken } = require('../middlewares/authMiddleware');

const router = express.Router();  // Create a new router object

router.use(validateToken);  // Use the validateToken middleware

// GET localhost:5000/api/posts/
router.get("/", getAllPosts);

// POST localhost:5000/api/posts/
router.post("/", createPost);

module.exports = router;  // Export the router object