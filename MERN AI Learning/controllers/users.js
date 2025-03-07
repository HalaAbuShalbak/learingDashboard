const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user ={}

// create function
user.userRegister = (req, res) => {
  const { email,
    name,
    userName,
    password,
    role,
    img,
    level,
    languages,
    evaluations} = req.body;
  const user = new userModel({
    email,
    name,
    userName,
    password,
    role,
    img,
    level,
    languages,
    evaluations
  });
  
  user
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        user: result,
      });
    })
    .catch((err) => {
      if (err?.keyPattern?.email) {
        return res.status(409).json({
          success: false,
          message: `The email ${email.toLowerCase()} already exists`,
        });
      }
      if (err?.keyPattern?.userName) {
        return res.status(409).json({
          success: false,
          message: `The username ${userName} is used by another user`,
        });
      }

      if(err?.errors?.email?.name==="ValidatorError"){
       return res.status(400).json({
        success: false,
        message: "The email has to contain upper and lower case letters,(.,-,_) ex:(User_1@example.com"
      })
    }
    if(err?.errors?.password?.name==="ValidatorError"){
       return res.status(400).json({
        success: false,
        message: err?.errors?.password?.message
      })
    }
    else{
      return res.status(500).json({
        success: false,
        message: err.message,
      
      })
    }

    });
};
user.deleteUser = (req, res) => {
  const username = req.params.username;
  userModel
    .findOneAndDelete({ userName: username })
    .populate("role")
    .then((userUn) => {
      if (userUn) {
        res.status(200).json({
          success: true,
          message: `user ${username} deleted`,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "user not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message
      });
    });
};
// login
user.login = (req, res) => {
  const email = req?.body?.email?.toLowerCase();
  const password = req.body.password;
  const userName = req?.body?.userName;
  userModel
    .findOne({ $or: [{ email: email }, { userName: userName }] })
      .then(async (user) => {
      console.log(user);
      if (!user) {
        res.status(404).json(
       {   status:false,
          message:"The user doesn't exist"})
      } else {
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          res.status(403).json({
            success: false,
            message: "The email doesn't exist or the password you've entered is incorrect",
          });
        } else {
          console.log("isValid:",isValid)
          const payload = {
            userId: user._id,
            role: user.role,
            name:user.userName
          };
          const secret = process.env.Secret;
      
          const options = { expiresIn: "5hr" };
          const token = jwt.sign(payload, secret, options);
          const userId=user._id
          const role=user.role
          res.status(200).json({
            success: true,
            message: "Valid login credentials",
            token: token,
            userId:userId,
            role: role

          });
        }
      }
    })
    .catch((error) => {
      console.log(error.message)
      res.status(404).json(error);
    });
};
// get all users
user.getAllUsers = (req, res) => {
  userModel
    .find({})
    .populate("role","-_Id -__v -permissions")
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "all users",
        users: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};
module.exports = user;