import express from "express";
import {
  createContact,
  getContacts
} from "../controllers/contactController.js";

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Create a new contact form entry
 */
router.post("/", createContact);

/**
 * @route   GET /api/contact
 * @desc    Get all contact form entries
 */
router.get("/", getContacts);

export default router;
