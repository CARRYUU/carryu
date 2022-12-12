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
<<<<<<< HEAD
const courseRoute = require("./routes/course-route.js");
const cartRoute = require("./routes/cart-route.js");

=======
>>>>>>> 5d9648c86d830b2494ce00f1bb3925b17cbeafb9
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
<<<<<<< HEAD
app.use("/api/course", courseRoute);
app.use("/api/cart", cartRoute);

=======
>>>>>>> 5d9648c86d830b2494ce00f1bb3925b17cbeafb9
app.use("/api/points", pointRoute);
app.use("/api/payment", paymentRoute);
// Listen port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
