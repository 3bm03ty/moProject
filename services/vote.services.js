const candidatesModel = require("../models/candidates.model");
const voterModel = require("../models/votar.model");
const voteModel = require("../models/vote.model");

module.exports.addVote = async (req, res) => {
  let voter = await voteModel.findOne({ VID: req.body.VID });
  //   console.log(voter);
  if (voter) {
    res.json({ success: false, msg: "can't vote again" });
  } else {
    try {
      let voterID = await voterModel.findOne({ _id: req.body.VID });
      if (voterID) {
        await voterModel.findOneAndUpdate(
          { _id: req.body.VID },
          { flag: true }
        );
        await candidatesModel.findOneAndUpdate(
          { _id: req.body.CID },
          { $inc: { votes: 1 }, flag: true }
        );
        const { CID, VID } = req.body;
        await voteModel.insertMany({ CID, VID });
        res.json({ success: true });
      } else {
        res.json({ success: false, msg: "no voter for this id" });
      }
    } catch (error) {
      res.json({ error });
    }
  }
};

module.exports.getVotes = async (req, res) => {
  try {
    let votes = await candidatesModel.find({}).select("votes fname pname");
    res.json({ success: true, votes });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.getTotalVotes = async (req, res) => {
  try {
    let total = await voteModel.find({}).count();
    res.json({ success: true, total });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.getVotesDate = async (req, res) => {
  try {
    let total = await voteModel.find({}).select("createdAt CID -_id");
    res.json({ success: true, total });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.getCandidatesData = async (req, res) => {
  try {
    let data = await voteModel
      .find({ CID: req.body.CID })
      .populate("VID", "-_id -NID -fname -pname -template -__v -flag ")
      .select("-_id -__v -CID  -updatedAt");
    res.json({ success: true, data });
  } catch (error) {
    res.json({ error });
  }
};
