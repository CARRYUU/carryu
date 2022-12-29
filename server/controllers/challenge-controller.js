const User = require("../models/user-model");

// @desc    Add challenge record
// @route   PUT /api/challege/add
// @access  Private
exports.addChallengeRecord = async (req, res) => {
  const { course_id } = req.body;
  const status = "inprogress";

  User.findById(req.user._id)
    .then(async (user) => {
      if (!user) {
        return res.status(404).json({ err_msg: "User Not found" });
      }

      // Check if the course is already in the challenge history.
      const courseInHistory = user.challenge_history.find(
        (record) => record.course_id.toString() === course_id.toString()
      );

      if (courseInHistory) {
        return res.status(400).json({
          err_msg:
            "You have already challenged this course! Please try another course.",
        });
      }

      // Check if there's any course in the challenge history with status "inprogress".
      const inProgressCourse = await user.challenge_history.find(
        (record) => record.status === "inprogress"
      );

      if (inProgressCourse) {
        return res.status(400).json({
          err_msg:
            "There's already a course in progress. Please finish it first!",
        });
      }

      const challengeRecord = {
        course_id,
        status,
      };

      user.challenge_history.unshift(challengeRecord);

      await user
        .save()
        .then((user) => {
          return res.status(200).json({
            message: "Challenge record added successfully!",
            challenge_record: user.challenge_history[0],
          });
        })
        .catch((err) => {
          return res.status(500).json({ err_msg: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ err_msg: err });
    });
};

// @desc    Set challenge to success
// @route   PUT /api/challege/set-to-success
// @access  Private
exports.setChallengeToSuccess = async (req, res) => {
  const { course_id } = req.body;

  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ err_msg: "User Not found" });
      }

      const courseInHistory = user.challenge_history.find(
        (record) => record.course_id.toString() === course_id.toString()
      );

      if (!courseInHistory) {
        return res.status(404).json({ err_msg: "Challenge record not found" });
      }

      if (courseInHistory.status === "success") {
        return res.status(400).json({ err_msg: "Challenge already succeeded" });
      }

      courseInHistory.status = "success";
      courseInHistory.completed_at = Date.now();

      user
        .save()
        .then(() => {
          return res.json({
            message: "Challenge record updated successfully!",
            challenge_record: courseInHistory,
          });
        })
        .catch((err) => {
          return res.status(500).json({ err_msg: err });
        });
    })
    .catch((err) => {
      return res.status(500).json({ err_msg: err });
    });
};

// @desc    Set challenge to failed
// @route   PUT /api/challege/set-to-failed
// @access  Private
exports.setChallengeToFailed = async (req, res) => {
  const { course_id } = req.body;

  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ err_msg: "User Not found" });
      }

      const courseInHistory = user.challenge_history.find(
        (record) => record.course_id.toString() === course_id.toString()
      );

      if (!courseInHistory) {
        return res.status(404).json({ err_msg: "Challenge record not found" });
      }

      // Check if the course is already in the user's failed courses.
      if (courseInHistory.status === "failed") {
        return res.status(400).json({ err_msg: "Challenge already failed" });
      }

      // Check if the course is inprogress, only course with status "inprogress" can be failed.
      if (courseInHistory.status !== "inprogress") {
        return res.status(400).json({
          err_msg: "Only course with status 'inprogress' can be failed",
        });
      }

      courseInHistory.status = "failed";

      user
        .save()
        .then(() => {
          return res.json({
            message: "Challenge record updated successfully!",
            challenge_record: courseInHistory,
          });
        })
        .catch((err) => {
          return res.status(500).json({ err_msg: err });
        });
    })
    .catch((err) => {
      return res.status(500).json({ err_msg: err });
    });
};

// @desc    Get challenge history
// @route   GET /api/challege/
// @access  Private
exports.getChallengeHistory = async (req, res) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ err_msg: "User Not found" });
      }

      return res.json({
        message: `Found ${user.challenge_history.length} challenge records`,
        challenge_history: user.challenge_history,
      });
    })
    .catch((err) => {
      return res.status(500).json({ err_msg: err });
    });
};
