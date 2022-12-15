const express = require("express");
const router = express.Router();
const { processPayment } = require("../controllers/payment-controller");
const { isAuthenticatedUser } = require("../middlerware/auth-middleware");

router.route("/").get(isAuthenticatedUser, processPayment);

module.exports = router;
