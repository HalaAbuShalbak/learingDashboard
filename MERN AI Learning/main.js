const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./models/db")
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// routes 




// endpoints





app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  
});