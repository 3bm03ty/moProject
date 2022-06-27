const mongoose = require("mongoose");

const electionSchema = mongoose.Schema({
  name: { type: String, required: true },
  start: Date,
  end: Date,
});

module.exports = mongoose.model("election", electionSchema);
