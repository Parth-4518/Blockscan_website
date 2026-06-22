import Contact from "../models/Contact.js";

/**
 * CREATE CONTACT
 */
export const createContact = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // save to DB
    const contact = await Contact.create({
      name,
      email,
      message
    });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: contact
    });

  } catch (error) {
    console.error("CREATE CONTACT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

/**
 * GET ALL CONTACTS
 */
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      success: true,
      data: contacts
    });

  } catch (error) {
    console.error("GET CONTACTS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};