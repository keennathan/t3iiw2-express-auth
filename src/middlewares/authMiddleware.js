
const jwt = require('jsonwebtoken');  // Import the jsonwebtoken package

async function validateToken(req, res, next) {
    const token = req.headers.jwt;  // Get the token from the headers

    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify the token
    req.authUserData = decoded;  // Add the decoded data to the request object

    next();  // Call the next middleware
}

module.exports = {
    validateToken
}