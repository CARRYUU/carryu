const mongoose = require("mongoose");

const dbName = "carryu";

const connectDB = () => {
  console.log("Connecting to database...");

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName,
    })
    .then(() =>
      console.log(`MongoDB connected! Connected to database ${dbName}`)
    )
    .catch((err) => console.log(err));
};

module.exports = connectDB;
