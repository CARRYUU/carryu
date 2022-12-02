const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const purchaseRecordSchema = new Schema({
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  price: Number,
  payment_type: {
    type: String,
    required: "Payment method is required.",
    enum: ["atm", "points", "credit_card"],
  },
  status: {
    type: String,
    required: true,
    enum: ["buy", "refund"],
  },
});

module.exports = mongoose.model("PurchaseRecord", purchaseRecordSchema);

const memberSchema = new Schema({
  username: {
    type: String,
    required: "Name is required",
    minLength: 3,
    maxLength: 255,
  },
  avatar: {
    type: Buffer,
  },
  email: {
    type: String,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  password: {
    type: String,
    required: "Password is required",
    minLength: 3,
    maxLength: 255,
  },
  role: {
    type: String,
    enum: {
      values: ["student", "instructor"],
      message: "{VALUE}` is not support.",
    },
  },
  shopping_cart: {
    type: [Schema.Types.ObjectId],
    ref: "Course",
  },
  purchase_history: {
    type: [Schema.Types.ObjectId],
    ref: "PurchaseRecord",
  },
  points: {
    type: Number,
    default: 0,
  },
  challenge_record: [
    {
      course_id: Schema.Types.ObjectId,
      challenge_date: Date,
      status: {
        type: String,
        enum: ["success", "fail", "inprogress"],
      },
    },
  ],
  register_time: {
    type: Date,
    default: Date.now,
  },
});

memberSchema.methods.isStudent = function () {
  return this.role === "student";
};

memberSchema.methods.isInstructor = function () {
  return this.role === "instructor";
};

memberSchema.methods.isAdmin = function () {
  return this.role === "admin";
};

// Hash password before saving into database.
memberSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(this.password, salt, function (err, hash) {
        this.passsword = hash;
      });
    });
    next();
  } else {
    next();
  }
});

// Compare input password
memberSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Member", memberSchema);
