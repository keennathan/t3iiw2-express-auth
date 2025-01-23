
const { Post } = require('../models/PostModel');  // Import the Post model

// CRUD operations to be defined here
// Read - Get all posts
async function getAllPosts(req, res) {
    try {
        const posts = await Post.find();  // find all posts
        res.json(posts);  // return the posts
    } catch (error) {
        res
        .status(500)
        .json({
             message: error.message 
            });
    }
}

// Create - Create a new post
async function createPost(req, res) {
    try{
        const { title, content } = req.body;  // Get the title and content from the request body
        const post = await Post.create({ // Create a new post
            title, 
            content,
            user: req.authUserData.userId  // Add the user ID to the post
        });  
        res
        .status(201)
        .json(post);  // Return the new post
    } catch (error) {
        res
        .status(500)
        .json({
            message: error.message
        });
    }
}


 // Export the functions
module.exports = {
    getAllPosts,
    createPost
}; 