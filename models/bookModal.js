import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    isBorrowed: { type: Boolean, default: false },
    borrowedBy: { type: String },
    borrowedOn: { type: Date },
    returnDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
