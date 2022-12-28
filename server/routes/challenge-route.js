const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlerware/auth-middleware");
const {
  addChallengeRecord,
  setChallengeToSuccess,
  getChallengeHistory,
} = require("../controllers/challenge-controller");

router.route("/add").post(isAuthenticatedUser, addChallengeRecord);

router
  .route("/set-to-success")
  .post(isAuthenticatedUser, setChallengeToSuccess);

router.route("/").get(isAuthenticatedUser, getChallengeHistory);

module.exports = router;
