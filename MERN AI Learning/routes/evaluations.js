const express = require("express");
const evaluationRouter = express.Router();
const evaluation = require("../controllers/evaluations");
const authentication = require ("../middlewares/authentication")
const authorization = require("../middlewares/authorization");

evaluationRouter.post("/create",authentication,authorization("takeQuiz"), evaluation.createEvaluation); // Create evaluation
evaluationRouter.get("/user/:userId", evaluation.getEvaluationsByUser); // Get evaluations by user
evaluationRouter.get("/average/:userId", evaluation.getAverageScoreByLanguage); // Get avg score of user's quizzes per language

module.exports = evaluationRouter;


// testing object
/* 

{
  "user": "67cb5180983edacde7d93a04",
  "language": "en",
  "level": "beginner",
  "quizScore": 85,
  "completionTime": 300
}



*/
