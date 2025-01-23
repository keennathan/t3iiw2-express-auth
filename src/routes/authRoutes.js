const express = require('express');  // Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

const { registerUser, loginUser } = require('../controllers/authController');  // Import the registerUser and loginUser functions from the authController.js file
const router = express.Router();  // Create a new router object

// POST localhost:5000/api/auth/register
router.post("/register", registerUser);

// POST localhost:5000/api/auth/login
router.post("/login", loginUser);

module.exports = router;  // Export the router object