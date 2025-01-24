
const express = require('express');  // Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const cors = require('cors');  // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const helmet = require('helmet');   // Helmet helps you secure your Express apps by setting various HTTP headers.
const authRoutes = require('./routes/authRoutes.js');  // Import the authRoutes module
const postRoutes = require('./routes/postRoutes.js');  // Import the postRoutes module

const app = express();  // Create an Express application

app.use(cors());  // Enable CORS
let corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:5173", "https://reactapp.com"],
    methods: ["GET", "POST"]
};
app.use(cors(corsOptions));  // Enable CORS with options

app.use(helmet());  // Enable Helmet
app.use(express.json());  // Enable JSON parsing

// app.verb(path, callback);
app.get("/", (req, res) => {
    // response.send("<h1>Hello World!</h1>");

    res.json({
        message: "Hello World!"
    });
});


app.use("/api/auth", authRoutes);  // Use the authRoutes module for the /api/auth path

app.use("/api/posts", postRoutes);  // Use the postRoutes module for the /api/posts path

module.exports = { app };  // Export the app object