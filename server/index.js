const express = require("express");
const connect_db = require("./config/database.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connect_db();

// Listen port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
