const express = require("express");
const router = express.Router();
const {
  addPoints,
  deletePoints,
  getPoints,
} = require("../controllers/point-controller");
const { isAuthenticatedUser } = require("../middlerware/auth-middleware");

router.route("/add").put(isAuthenticatedUser, addPoints);
router.route("/delete").put(isAuthenticatedUser, deletePoints);
router.route("/get").get(isAuthenticatedUser, getPoints);
module.exports = router;
