const mongoose = require("mongoose");

const connect_db = () => {
  console.log("Connecting to database...");

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

module.exports = connect_db;
