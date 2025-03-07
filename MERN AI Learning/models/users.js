const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  name: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  password: { 
    type: String, 
    required: true, 
      },
  role: { 
    type: String, 
    enum: ["user", "admin"], 
    default: "user" 
  },
  img: { 
    type: String, 
    default: "https://www.webiconio.com/_upload/255/image_255.svg" 
  },
  level: { 
    type: String, 
    enum: ["beginner", "intermediate", "advanced"], 
    required: true 
  },
  languages: [{ type: String, enum: ["en", "ar", "es", "it", "ja", "tr"] }], // Store language codes
  evaluations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Evaluations" }]
}, { timestamps: true }); // Adds createdAt & updatedAt fields

// 🔹 Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🔹 Compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
