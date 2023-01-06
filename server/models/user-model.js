const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = new Schema({
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
    select: false,
  },
  role: {
    type: String,
    default: "student",
    enum: {
      values: ["student", "instructor"],
      message: "{VALUE}` is not support.",
    },
  },
  shopping_cart: {
    type: [Schema.Types.ObjectId],
    ref: "Course",
  },
  purchase_history: [
    {
      type: {
        type: String,
        required: true,
        enum: ["buy", "refund"],
      },
      course_id: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
      title: String,
      price: Number,
      payment_method: {
        type: String,
        required: "Payment method is required.",
        enum: ["ATM", "POINTS", "CREADIT_CARD"],
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  points: {
    type: Number,
    default: 0,
  },
  challenge_history: [
    {
      course_id: Schema.Types.ObjectId,
      title: String,
      challenge_date: {
        type: Date,
        default: Date,
      },
      status: {
        type: String,
        enum: ["success", "failed", "inprogress"],
      },
    },
  ],
  register_time: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.isStudent = function () {
  return this.role === "student";
};

userSchema.methods.isInstructor = function () {
  return this.role === "instructor";
};

userSchema.methods.isAdmin = function () {
  return this.role === "admin";
};

// Hash password before saving into database.
userSchema.pre("save", function (next) {
  const user = this;
  if (user.isModified("password") || user.isNew) {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);

        // Store hash in your password DB.
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Compare input password
userSchema.methods.comparePassword = async function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err, isMatch);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);
