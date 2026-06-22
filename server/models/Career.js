import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    position: String,
    resume: String
  },
  { timestamps: true }
);

const Career = mongoose.model("Career", careerSchema);

export default Career;