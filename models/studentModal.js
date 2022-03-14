import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    class: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
