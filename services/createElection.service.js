const electionMode = require("../models/createElection.model");

module.exports.addElection = async (req, res) => {

    try {
      await electionMode.insertMany(req.body);
      res.json({ success: true });
    } catch (error) {
      res.json({ error });
    }

};
module.exports.getElections = async (req, res) => {
    try {
      let election = await electionMode.find({});
      res.json({ success: true, election });
    } catch (error) {
      res.json({ error });
    }
  };
module.exports.getElectionById = async (req, res) => {
  try {
    let election = await electionMode.findOne({ _id: req.params.id });
    res.json({ success: true, election });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.UpdateElection = async (req, res) => {
  try {
    await electionMode.updateMany({ _id: req.body.id }, req.body);
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.deleteElection = async (req, res) => {
  try {
    await electionMode.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};

