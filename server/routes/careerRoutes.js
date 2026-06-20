const express = require("express");
const router = express.Router();

// temporary storage (RAM memory)
let applications = [];

/**
 * POST /apply
 * Save career application
 */
router.post("/apply", (req, res) => {
  const { name, email, role } = req.body;

  const newApplication = {
    id: Date.now(),
    name,
    email,
    role,
  };

  applications.push(newApplication);

  res.json({
    success: true,
    message: "Application received successfully",
    data: newApplication,
  });
});

/**
 * GET /apply
 * Get all applications
 */
router.get("/apply", (req, res) => {
  res.json({
    success: true,
    data: applications,
  });
});

/**
 * GET /apply/:id
 * Get single application
 */
router.get("/apply/:id", (req, res) => {
  const app = applications.find(a => a.id == req.params.id);

  if (!app) {
    return res.status(404).json({
      success: false,
      message: "Application not found",
    });
  }

  res.json({
    success: true,
    data: app,
  });
});

module.exports = router;