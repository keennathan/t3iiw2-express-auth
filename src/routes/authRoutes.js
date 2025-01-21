const express = require('express');  // Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

const router = express.Router();  // Create a new router object

// POST localhost:5000/api/auth/register
router.post("/register", () => {
    console.log("This is a register screen.");
} );

// POST localhost:5000/api/auth/login
router.post("/login", () => {
    console.log("This is a login screen.");
});

module.exports = router;  // Export the router object