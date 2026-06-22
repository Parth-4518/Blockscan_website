import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes
import contactRoutes from "./routes/contactRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";

dotenv.config();

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   BASIC TEST ROUTES
========================= */
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working fine" });
});

/* =========================
   ROUTES
========================= */
app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);

/* =========================
   404 HANDLER (MUST BE LAST)
========================= */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* =========================
   ERROR HANDLER
========================= */
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

startServer();