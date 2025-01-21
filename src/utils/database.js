const mongoose = require('mongoose');  // Import the mongoose library

// Connect to the database
async function connectDB() {
    let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;  // Get the database URL from the environment variables

    try{
        await mongoose.connect(databaseUrl);  // Connect to the database
    console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);  // Log an error message if the connection fails
        // Exit the process if the connection fails
        process.exit(1);  // Exit the process with an error code
    }

}

module.exports = connectDB;  // Export the connectDB function