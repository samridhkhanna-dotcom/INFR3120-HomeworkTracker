// models/Homework.js

const mongoose = require("mongoose");

const HomeworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
  description: {
    type: String,
    required: false,
  }
}, { timestamps: true });

module.exports = mongoose.model("Homework", HomeworkSchema);
