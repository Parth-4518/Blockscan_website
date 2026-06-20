const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const careerRoutes = require("./routes/careerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);

app.get("/", (req, res) => {
  res.send("Blockscan Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});