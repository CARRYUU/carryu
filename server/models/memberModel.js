const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
  avatar: Buffer,
  email: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 255,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
  register_time: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "instructor"],
  },
  shopping_cart: [
    {
      course_id: mongoose.Schema.Types.ObjectId,
    },
  ],
  purchase_history: [
    {
      course_id: String,
      price: Number,
      payment_type: {
        type: String,
        enum: ["atm", "points", "credit_card"],
      },
      status: {
        type: String,
        enum: ["buy", "refund"],
      },
    },
  ],
  points: {
    type: Number,
    default: 0,
  },
  challenge_record: [
    {
      course_id: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Member", memberSchema);
