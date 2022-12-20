const User = require("../models/user-model.js");

//@desc Add points
//@route PUT api/points/add
//@access Private
const addPoints = async (req, res) => {
  const { add_points } = req.body;
  //check if user exists
  User.findById(req.user._id).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    //get newpoints
    const newPoints = user.points + add_points;
    User.updateOne({ _id: user._id }, { $set: { points: newPoints } })
      .then(() => {
        return res.status(200).json({
          msg: "Points added successfully",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          msg: "Failed to add points",
        });
      });
  });
};

//@desc Delete points
//@route PUT api/points/delete
//@access Private
const deletePoints = async (req, res) => {
  const { delete_points } = req.body;
  //check if user exists
  User.findById(req.user._id).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
    //get newpoints
    const newPoints = user.points - delete_points;

    //check if newpoints is negative
    if (newPoints < 0) {
      return res.status(400).json({
        msg: "Not enough points",
      });
    } else {
      User.updateOne({ _id: user._id }, { $set: { points: newPoints } })
        .then(() => {
          return res.status(200).json({
            msg: "Points deleted successfully",
          });
        })
        .catch((err) => {
          return res.status(400).json({
            msg: "Failed to delete points",
          });
        });
    }
  });
};

//@desc Get points
//@route GET api/points/get
//@access Private
const getPoints = async (req, res) => {
  User.findById(req.user._id).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    //get points
    const gotpoints = user.points;
    if (gotpoints) {
      return res.status(200).json({
        msg: `You have ${gotpoints} points`,
      });
    } else if (gotpoints == 0) {
      return res.status(400).json({
        msg: `You have 0 points`,
      });
    } else {
      return res.status(400).json({
        msg: `Failed to get points`,
      });
    }
  });
};

module.exports = { addPoints, deletePoints, getPoints };
