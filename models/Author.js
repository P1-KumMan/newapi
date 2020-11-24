const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("authors", PostSchema);
