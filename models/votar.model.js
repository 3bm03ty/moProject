const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  NID: { type: String, unique: true, maxlength: 14 },
  fname: { type: String, required: true },
  pname: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  status: { type: String, required: true },
  gender: { type: String, required: true },
  birthday: Date,
  template: { type: String, required: true },
  flag: { type: Boolean, default: false },
});

module.exports = mongoose.model("votar", userSchema);
