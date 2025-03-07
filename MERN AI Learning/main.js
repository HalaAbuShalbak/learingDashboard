const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./models/db")
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// routes 
const userRouter=require("./routes/users")
const roleRouter=require("./routes/roles")



// endpoints

// role endpoint
app.use("/role",roleRouter)

// user endpiont
app.use("/user",userRouter)





app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  
});