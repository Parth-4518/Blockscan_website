import Career from "../models/Career.js";

/**
 * @desc    Create a new career application
 * @route   POST /api/career
 * @access  Public
 */
export const createCareer = async (req, res) => {
  try {
    const { name, email, phone, position, resume, message } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and position",
      });
    }

    const career = await Career.create({
      name,
      email,
      phone,
      position,
      resume,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Career application submitted successfully",
      data: career,
    });
  } catch (error) {
    console.error("Career submission error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit career application",
      error: error.message,
    });
  }
};

/**
 * @desc    Get all career applications
 * @route   GET /api/career
 * @access  Public
 */
export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: careers.length,
      data: careers,
    });
  } catch (error) {
    console.error("Get careers error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch career applications",
      error: error.message,
    });
  }
};
