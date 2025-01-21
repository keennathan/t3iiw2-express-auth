
const mongoose = require("mongoose");  // Import the mongoose library

// Define the Post schema
const PostSchema = new mongoose.Schema({
    // Define the title field
    title: {
        type: String,
        required: true
    },
    // Define the content field
    content: {
        type: String,
        required: true
    },
    // Define the user field
    user: {
        type: mongoose.Schema.Types.ObjectId,  // This is the ID of the user who created the post
        ref: 'User',
        required: true
    }
});

const PostModel = mongoose.model('Post', PostSchema);  // Create a Post model from the Post schema

// Export the Post model
module.exports = {
    PostModel
}