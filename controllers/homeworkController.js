// controllers/homeworkController.js

const Homework = require("../models/Homework");

// -----------------------------
// Show all homework (READ)
// -----------------------------
exports.getAllHomework = async (req, res) => {
  try {
    const homeworkList = await Homework.find().sort({ dueDate: 1 });
    res.render("list", { homeworkList });
  } catch (err) {
    console.log(err);
    res.send("Error loading homework.");
  }
};

// -----------------------------
// Show create form
// -----------------------------
exports.showCreateForm = (req, res) => {
  res.render("create");
};

// -----------------------------
// Create homework (CREATE)
// -----------------------------
exports.createHomework = async (req, res) => {
  try {
    const { title, course, dueDate, status, description } = req.body;

    await Homework.create({
      title,
      course,
      dueDate,
      status,
      description
    });

    res.redirect("/homework");
  } catch (err) {
    console.log(err);
    res.send("Error creating homework.");
  }
};

// -----------------------------
// Show edit form (existing data)
// -----------------------------
exports.showEditForm = async (req, res) => {
  try {
    const homework = await Homework.findById(req.params.id);
    res.render("edit", { homework });
  } catch (err) {
    console.log(err);
    res.send("Error loading edit page.");
  }
};

// -----------------------------
// Update homework (UPDATE)
// -----------------------------
exports.updateHomework = async (req, res) => {
  try {
    const { title, course, dueDate, status, description } = req.body;

    await Homework.findByIdAndUpdate(req.params.id, {
      title,
      course,
      dueDate,
      status,
      description
    });

    res.redirect("/homework");
  } catch (err) {
    console.log(err);
    res.send("Error updating homework.");
  }
};

// -----------------------------
// Delete confirmation page
// -----------------------------
exports.showDeleteConfirm = async (req, res) => {
  try {
    const homework = await Homework.findById(req.params.id);
    res.render("deleteConfirm", { homework });
  } catch (err) {
    console.log(err);
    res.send("Error loading delete confirmation.");
  }
};

// -----------------------------
// Delete homework (DELETE)
// -----------------------------
exports.deleteHomework = async (req, res) => {
  try {
    await Homework.findByIdAndDelete(req.params.id);
    res.redirect("/homework");
  } catch (err) {
    console.log(err);
    res.send("Error deleting homework.");
  }
};
