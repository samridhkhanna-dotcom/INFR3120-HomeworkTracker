// routes/homeworkRoutes.js

const express = require("express");
const router = express.Router();
const homeworkController = require("../controllers/homeworkController");

// View all homework (READ)
router.get("/", homeworkController.getAllHomework);

// Show create form
router.get("/create", homeworkController.showCreateForm);

// Handle create form submission
router.post("/create", homeworkController.createHomework);

// Show edit form
router.get("/edit/:id", homeworkController.showEditForm);

// Handle update form submission
router.post("/edit/:id", homeworkController.updateHomework);

// Show delete confirmation page
router.get("/delete/:id", homeworkController.showDeleteConfirm);

// Handle delete action
router.post("/delete/:id", homeworkController.deleteHomework);

module.exports = router;

