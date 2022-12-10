const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const isAuthenticatedUser = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded._id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        err_msg: "Not authorized, token failed.",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      err_msg: "Not authorized, no token available. Please login first.",
    });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      err_msg: "Not authorized as an admin.",
    });
  }
};

const isInstructor = (req, res, next) => {
  if (req.user && req.user.isInstructor()) {
    next();
  } else {
    return res.status(401).json({
      err_msg: "Only instructor can post a new course.",
    });
  }
};

module.exports = { isAuthenticatedUser, isAdmin, isInstructor };
