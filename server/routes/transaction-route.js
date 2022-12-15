const router = require("express").Router();
const { addPurchaseRecord, addRefundRecord } = require("../controllers/transaction-controller");

const { isAuthenticatedUser } = require("../middlerware/auth-middleware");

router.route("/purchase").post(isAuthenticatedUser, addPurchaseRecord);
router.route("/refund").post(isAuthenticatedUser, addRefundRecord);

module.exports = router;
