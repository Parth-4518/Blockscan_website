import express from "express";
import { createCareer } from "../controllers/careerController.js";

const router = express.Router();

/**
 * @route   POST /api/career
 * @desc    Create a new career application
 */
router.post("/", createCareer);

export default router;
