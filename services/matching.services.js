const matchingModel = require("../models/matching.model");
module.exports.addMatching = async (req, res) => {
  console.log(req.body);
  const Matching = await matchingModel.find();
  console.log(Matching);
  if (Matching.length > 0) {
    try {
      await matchingModel.updateMany({}, req.body);
      res.json({ success: true });
    } catch (error) {
      res.json({ error });
    }
  } else {
    try {
      const { matching } = req.body;
      await matchingModel.insertMany({ matching });
      res.json({ success: true });
    } catch (error) {
      res.json({ error });
    }
  }
};

module.exports.getMatching = async (req, res) => {
  try {
    let Matching = await matchingModel.findOne({});
    res.json({ success: true, Matching: Matching.matching });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.deleteMatching = async (req, res) => {
  try {
    await matchingModel.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};
