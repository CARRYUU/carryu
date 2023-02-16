const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database.js");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.set("trust proxy", true);
const PORT = process.env.PORT || 3000;

// Import routes
const authRoute = require("./routes/auth-route.js");
const userRoute = require("./routes/user-route.js");
const courseRoute = require("./routes/course-route.js");
const cartRoute = require("./routes/cart-route.js");
const pointRoute = require("./routes/point-route.js");
const paymentRoute = require("./routes/payment-route.js");
const transactionRoute = require("./routes/transaction-route.js");
const challengeRoute = require("./routes/challenge-route.js");

// Connect to database
connectDB();

// Init middleware
app.use(express.json()); // automatically parse incoming JSON to object
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/course", courseRoute);
app.use("/api/cart", cartRoute);
app.use("/api/transaction", transactionRoute);
app.use("/api/points", pointRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/challenge", challengeRoute);

app.get("*", (req, res) => {
  console.log(path.join(__dirname, "build", "index.html"));

  res.sendFile(__dirname, "build", "index.html");
});

// Listen port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
