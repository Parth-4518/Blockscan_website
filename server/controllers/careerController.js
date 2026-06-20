import Career from "../models/Career.js";

/* =========================
   CREATE CAREER
========================= */
export const createCareer = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const { name, email, position, resume } = req.body;

    // check empty body
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is empty. Check Postman JSON setup."
      });
    }

    // validation
    if (!name || !email || !position || !resume) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        missingFields: {
          name: !name,
          email: !email,
          position: !position,
          resume: !resume
        }
      });
    }

    // save to DB
    const career = await Career.create({
      name,
      email,
      position,
      resume
    });

    return res.status(201).json({
      success: true,
      message: "Career saved successfully",
      data: career
    });

  } catch (error) {
    console.error("CREATE CAREER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/* =========================
   GET ALL CAREERS
========================= */
export const getCareers = async (req, res) => {
  try {
    console.log("GET /api/career hit");

    const careers = await Career.find();

    return res.status(200).json({
      success: true,
      count: careers.length,
      data: careers
    });

  } catch (error) {
    console.error("GET CAREERS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};