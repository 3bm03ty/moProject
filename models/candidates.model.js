const mongoose = require("mongoose");

const CandidateSchema = mongoose.Schema({
  NID: {
    type: String,
    unique: true,
    maxlength: 14,
    required: [true, "NID required."],
  },
  fname: { type: String, required: true },
  pname: { type: String, required: true },
  nickName: { type: String, required: true },
  cpic: { type: String, required: true },
  clogo: { type: String, required: true },
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model("candidate", CandidateSchema);
//add votes
//get voters elly ent5bt candidate mo3yan
