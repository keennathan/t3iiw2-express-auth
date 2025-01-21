
const express = require('express');  // Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

const router = express.Router();  // Create a new router object

// GET localhost:5000/api/posts/
router.get("/",() => {
    console.log("This is a get all posts screen.");
});

// POST localhost:5000/api/posts/
router.post("/", () => {
    console.log("This is a create a post screen.");
});

module.exports = router;  // Export the router object