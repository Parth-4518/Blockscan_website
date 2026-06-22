import express from "express";
import {
  createCareer,
  getCareers
} from "../controllers/careerController.js";

const router = express.Router();

/* =========================
   HEALTH CHECK ROUTE
========================= */
router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Career route is working 🚀"
  });
});

/* =========================
   CREATE CAREER
========================= */
router.post("/", createCareer);

/* =========================
   GET ALL CAREERS
========================= */
router.get("/", getCareers);

export default router;