const { Schema, model } = require("mongoose");

const schema = new Schema({
  parent: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("file", schema);
