const router = require("express").Router();
const {
  addPurchaseRecord,
  addRefundRecord,
} = require("../controllers/transaction-controller");

const { isAuthenticatedUser } = require("../middlerware/auth-middleware");

router.route("/purchase").put(isAuthenticatedUser, addPurchaseRecord);
router.route("/refund").put(isAuthenticatedUser, addRefundRecord);

module.exports = router;
