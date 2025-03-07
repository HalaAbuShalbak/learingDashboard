const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Reference to User
  language: {
    type: String,
    enum: ["en", "ar", "es", "it", "ja", "tr"],
    required: true,
  }, // Language of the evaluation
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  }, // Level being evaluated
  quizScore: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  }, // Score in percentage
  completionTime: {
    type: Number,
    required: true,
  }, // Time taken to complete quiz (in seconds)
  passed: {
    type: Boolean,
    default:false
  }, // Whether the user passed or not

  createdAt: {
    type: Date,
    default: Date.now,
  }, // Timestamp
});
// 🔹 Pre-save hook to set 'passed' based on 'quizScore'
evaluationSchema.pre("save", function (next) {
  if (this.quizScore < 50) {
    this.passed = false;
  } else if (this.quizScore >= 50) {
    this.passed = true;
  }

  next();
});
const Evaluation = mongoose.model("Evaluations", evaluationSchema);
module.exports = Evaluation;
