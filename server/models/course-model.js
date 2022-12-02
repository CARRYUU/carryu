const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema({
  content: {
    type: Buffer,
    require: true,
  },
  title: {
    type: String,
    require: "Video title is required.",
    minLength: 3,
    maxLength: 255,
  },
});

module.exports = mongoose.Model("Video", videoSchema);

const courseSchema = new Schema({
  id: {
    type: String,
    require: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  title: {
    type: String,
    require: "Title is required.",
    minLength: 3,
    maxLength: 255,
  },
  description: {
    type: String,
    maxLength: 255,
  },
  thumbnail: {
    type: Buffer,
  },
  price: {
    type: Number,
    require: "Price is required.",
    min: 0,
  },
  category: {
    type: String,
    enum: [
      "web-development",
      "programming-language",
      "finance",
      "it-and-software",
      "art-design",
      "music",
      "system-design",
      "music",
      "marketing",
      "others",
    ],
  },
  views_count: {
    type: Number,
    default: 0,
  },
  students_count: {
    type: Number,
    default: 0,
  },
  students: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  videos: {
    type: [Schema.Types.ObjectId],
    ref: "Video",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.Model("Course", courseSchema);
