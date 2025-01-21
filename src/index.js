const { app } = require('./server.js');  // Import the app object from server.js
const connectDB = require("./utils/database");  // Import the connectDB function from database.js

require("dotenv").config();  // Load the environment variables

// GET the PORT
const PORT = process.env.PORT || 8008;

// Start the server
app.listen(PORT, async() => {
    // Server is running at this point
    await connectDB();

    console.log("Server is running on port: " + PORT);
})