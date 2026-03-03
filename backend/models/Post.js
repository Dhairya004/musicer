const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user_account: {
    type: String,
    required: true,
  },
  post_music: {
    type: String,
  },
  images: {
    type: [String],
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,

  },
  comments: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema, "posts");