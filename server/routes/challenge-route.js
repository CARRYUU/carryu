const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlerware/auth-middleware");
const {
  addChallengeRecord,
  setChallengeToSuccess,
  setChallengeToFailed,
  getChallengeHistory,
} = require("../controllers/challenge-controller");

router.route("/add").put(isAuthenticatedUser, addChallengeRecord);

router
  .route("/set-to-success")
  .patch(isAuthenticatedUser, setChallengeToSuccess);
router.route("/set-to-failed").patch(isAuthenticatedUser, setChallengeToFailed);

router.route("/").get(isAuthenticatedUser, getChallengeHistory);

module.exports = router;
