const express = require("express");
const router = express.Router();
const { addPoints, deletePoints } = require("../controllers/point-controller");
const { isAuthenticatedUser } = require("../middlerware/auth-middleware");
const { route } = require("./user-route");

router.route("/add").put(isAuthenticatedUser, addPoints);
router.route("/delete").put(isAuthenticatedUser, deletePoints);

module.exports = router;
