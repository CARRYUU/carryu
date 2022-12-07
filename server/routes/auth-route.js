const express = require("express");
const authCtrl = require("../controllers/auth-controller");

const router = express.Router();

router.route("/login").post(authCtrl.login);
router.route("/logout").get(authCtrl.logout);

module.exports = router;
