import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: true
    },
    avatar: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: 'Bio is empty'
    },
    isBanned: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) return false;
  return bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User
