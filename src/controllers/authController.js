
const User = require('../models/UserModel');  // Import the User model

const bcrypt = require('bcryptjs');  // Import the bcryptjs library
const jwt = require('jsonwebtoken');  // Import the jsonwebtoken library

// Register a new user
async function registerUser(req, res) {
    const { username, password } = req.body;  // Get the username and password from the request body

    const existingUser = await User.findOne({ username });  // Check if the user already exists
    // If the user already exists, return an error
    if (existingUser) {  
        return res
        .status(400)
        .json({
             message: "User already exists" 
            });
    } 
    const hashedPassword = await bcrypt.hash(password, 10);  // Hash the password

    const user = await User.create({ username, password: hashedPassword });  // Create a new user 

    // Return a success message
    res
    .status(201)
    .json({
        "message": "User registered Successfully!"
    });
}
// Login a user
async function loginUser(req, res) {
    const { username, password } = req.body;  // Get the username and password from the request body

    const user = await User.findOne({ username });  // Find the user by username
    // If the user does not exist, return an error
    if (!user) {
        return res
        .status(400)
        .json({
            message: "Invalid Credentials."
        });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);  // Compare the password
    // If the password is invalid, return an error
    if (!isPasswordValid) {
        return res
        .status(400)
        .json({
            message: "Invalid Password."
        });
    }
    // Create a token
    const token = jwt.sign(
        { userId: user._id },  // Create a payload with the user ID
        process.env.JWT_SECRET,  // Use the JWT_SECRET environment variable as the secret
        { expiresIn: '1h' });  // Set the token to expire in 1 hour
    // Return the token
    res.json(
        { token }
    );
}

// Export the functions
module.exports = {
    registerUser,
    loginUser
};