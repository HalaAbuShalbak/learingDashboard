const express = require("express");
const user = require("../controllers/users");
const userRouter = express.Router();
userRouter.post("/register", user.userRegister);
userRouter.post("/login",user.login)
userRouter.delete("/delete/:username", user.deleteUser);
userRouter.get("/",user.getAllUsers)

module.exports = userRouter;


// testing object 
/* 

{
  "email": "testuser@example.com",
  "name": "Test User",
  "userName": "testuser123",
  "password": "Test@123", 
  "level": "beginner",
  "languages": ["en", "es"], 
  "evaluations": []
}

*/