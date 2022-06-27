var multer = require("multer");
var path = require("path");
var fs = require("fs");
var excelToJson = require("convert-excel-to-json");

const candidateModel = require("../models/candidates.model");
module.exports.addCandidate = async (req, res) => {
  console.log(req.body);
  let user = await candidateModel.findOne({ NID: req.body.NID });
  console.log(user);
  if (user) {
    res.json({ msg: "NID is already exist" });
  } else {
    try {
      // const {candidate}=req.body
      await candidateModel.insertMany(req.body);
      res.json({ success: true });
    } catch (error) {
      res.json({ error });
    }
  }
};

module.exports.getCandidateById = async (req, res) => {
  console.log(req.params.NID);

  try {
    let candidate = await candidateModel.findOne({ NID: req.params.NID });
    res.json({ success: true, candidate });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.getCandidate = async (req, res) => {
  try {
    let candidate = await candidateModel.find({});
    res.json({ success: true, candidate });
  } catch (error) {
    res.json({ error });
  }
};
module.exports.deleteCandidate = async (req, res) => {
  try {
    await candidateModel.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.addCandExel = (req, res) => {
  console.log(req.file.path);
  let objData = importExcelData2MongoDB(req.file.path);

  // res.json("ok");

  candidateModel.insertMany(objData, (err, data) => {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json("excel data inserted successfully.");
    }
  });
};

// Import Excel File to MongoDB database
function importExcelData2MongoDB(filePath) {
  // -> Read Excel File to Json Data
  const excelData = excelToJson({
    sourceFile: filePath,
    header: {
      rows: 1,
    },
    columnToKey: {
      A: "NID",
      B: "fname",
      C: "pname",
      D: "nickName",
      E: "cpic",
      F: "clogo",
      G: "votes",
    },
    // name: "sheet1",
  });
  // -> Log Excel Data to Console
  console.log(excelData.Sheet1[0]);
  return excelData.Sheet1[0];
}
