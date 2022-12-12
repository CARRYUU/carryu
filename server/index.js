const express = require("express");
require("dotenv").config();
const connect_db = require("./config/database.js");
const cors = require("cors");
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

// Import routes
const authRoute = require("./routes/auth-route.js");
const userRoute = require("./routes/user-route.js");
const courseRoute = require("./routes/course-route.js");
const cartRoute = require("./routes/cart-route.js");

const pointRoute = require("./routes/point-route.js");
const paymentRoute = require("./routes/payment-route.js");
// Connect to database
connect_db();

// Init middleware
app.use(express.json()); // automatically parse incoming JSON to object
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/course", courseRoute);
app.use("/api/cart", cartRoute);

app.use("/api/points", pointRoute);
app.use("/api/payment", paymentRoute);
// Listen port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
