// app.js

const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const homeworkRoutes = require("./routes/homeworkRoutes");

dotenv.config();

const app = express();

// ---------------------------
// Connect to MongoDB
// ---------------------------
connectDB();

// ---------------------------
// Middleware
// ---------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ---------------------------
// Routes
// ---------------------------
app.get("/", (req, res) => {
  res.render("home");
});

app.use("/homework", homeworkRoutes);

// ---------------------------
// Start the server
// ---------------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
