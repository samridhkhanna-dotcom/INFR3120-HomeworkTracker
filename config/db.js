// config/db.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log("Attempting to connect with URI:");
    console.log(process.env.DB_URI); // Print the connection string for debugging

    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected (from db.js)");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    // DO NOT EXIT — we need Render to show full logs
  }
};

module.exports = connectDB;
