import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      set: v => v || undefined,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      set: v => v || undefined,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    feedback: {
      type: String,
      required: [true, "Feedback is required"],
      trim: true,
      maxlength: 2000,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)


const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema)

export default Feedback
