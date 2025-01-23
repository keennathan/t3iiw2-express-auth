
const mongoose = require('mongoose');  // Import the mongoose library

// Define the User schema
const UserSchema = new mongoose.Schema({  
    // Define the username field
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true
    },
    // Define the password field
    password: { 
        type: String,
        required: true,
        minLength: 5
    }
});

const User = mongoose.model('User', UserSchema);  // Create a User model from the User schema

// Export the User model
module.exports = {
    User
}