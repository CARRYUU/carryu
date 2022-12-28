const User = require("../models/user-model");
const Course = require("../models/course-model");

// @desc    Add challenge record
// @route   POST /api/challege/add
// @access  Private
exports.addChallengeRecord = async (req, res) => {
  const { course_id, challenge_date } = req.body;
  const status = "inprogress";

  User.findOne({ _id: req.userId }, (err, user) => {
    if (err) {
      return res.status(500).send({ err_msg: err });
    }

    if (!user) {
      return res.status(404).send({ err_msg: "User Not found." });
    }

    // Check if the course is already in the challenge history.
    const courseInHistory = user.challenge_history.find(
      (record) => record.course_id === course_id
    );

    if (courseInHistory) {
      return res.status(400).send({
        err_msg:
          "You have already challenged this course! Please try another course.",
      });
    }

    // Check if there's any course in the challenge history with status "inprogress".
    const inProgressCourse = user.challenge_history.find(
      (record) => record.status === "inprogress"
    );

    if (inProgressCourse) {
      return res.status(400).send({
        err_msg:
          "There's already a course in progress. Please finish it first!",
      });
    }

    const challengeRecord = {
      course_id,
      challenge_date,
      status,
    };

    user.challenge_history.push(challengeRecord);

    user.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.send({
        message: "Challenge record added successfully!",
        challenge_record:
          user.challenge_history[user.challenge_history.length - 1],
      });
    });
  }).catch((err) => {
    res.status(500).send({ err_msg: err });
  });
};

// @desc    Set challenge to success
// @route   POST /api/challege/success
// @access  Private
exports.setChallengeToSuccess = async (req, res) => {
  const { course_id } = req.body;

  User.findOne({ _id: req.userId }, (err, user) => {
    if (err) {
      return res.status(500).send({ err_msg: err });
    }

    if (!user) {
      return res.status(404).send({ err_msg: "User Not found." });
    }

    // Check if the course is already in the challenge history.
    const courseInHistory = user.challenge_history.find(
      (record) => record.course_id === course_id
    );

    if (!courseInHistory) {
      return res.status(400).send({
        err_msg: "You have not challenged this course!",
      });
    }

    // Check if the course is in progress.
    if (courseInHistory.status !== "inprogress") {
      return res.status(400).send({
        err_msg: "This course is not in progress!",
      });
    }

    courseInHistory.status = "success";

    user.save((err) => {
      if (err) {
        res.status(500).send({ err_msg: err });
        return;
      }

      res.send({
        message: "Challenge record updated successfully!",
        challenge_record: courseInHistory,
      });
    });
  }).catch((err) => {
    res.status(500).send({ err_msg: err });
  });
};

// @desc    Get challenge history
// @route   GET /api/challege/
// @access  Private
exports.getChallengeHistory = async (req, res) => {
  User.findOne({ _id: req.userId }, (err, user) => {
    if (err) {
      return res.status(500).send({ err_msg: err });
    }

    if (!user) {
      return res.status(404).send({ err_msg: "User Not found." });
    }

    res.send(user.challenge_history);
  }).catch((err) => {
    res.status(500).send({ err_msg: err });
  });
};
