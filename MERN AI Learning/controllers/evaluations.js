const Evaluation = require("../models/evaluations");
const User = require("../models/users");
const evaluation={}

// 🔹 Create a new evaluation linked to a user and language
evaluation.createEvaluation = async (req, res) => {
  try {
    const {  language, level, quizScore, completionTime } = req.body;

    // Check if user exists
    const user = req.token.userId;
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    // Create evaluation
    const newEvaluation = new Evaluation({
      user,
      language,
      level,
      quizScore,
      completionTime,
    
      
    });

    await newEvaluation.save();
    res.status(201).json({ success: true, evaluation: newEvaluation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔹 Get all evaluations by user ID
evaluation.getEvaluationsByUser = async (req, res) => {
  try {
    const { userId } = req.params || req.token.userId;
    
    // Check if user exists
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
// sort the evaluations descendengly according to the creation time
    const evaluations = await Evaluation.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, evaluations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔹 Get average quiz score per language for a user
evaluation.getAverageScoreByLanguage = async (req, res) => {
  try {
    const { userId } = req.params;

    const averages = await Evaluation.aggregate([
      { $match: { user: new require("mongoose").Types.ObjectId(userId) } }, // Filter by user ID
      { 
        $group: { 
          _id: "$language",
          averageScore: { $avg: "$quizScore" } 
        }
      }
    ]);

    res.status(200).json({ success: true, averages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = evaluation