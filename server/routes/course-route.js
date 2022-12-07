const express = require("express");
const router = express.Router();

const { addNewCourse } = require("../controllers/course-controller");

router.post("/create", addNewCourse);

module.exports = router;
