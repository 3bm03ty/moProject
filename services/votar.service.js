const userMode = require("../models/votar.model");
var excelToJson = require("convert-excel-to-json");

module.exports.addUser = async (req, res) => {
  // console.log(req.body);
  let user = await userMode.findOne({ NID: req.body.NID });
  console.log(user);
  if (user) {
    res.json({ msg: "NID is already exist" });
  } else {
    try {
      await userMode.insertMany(req.body);
      res.json({ success: true });
    } catch (error) {
      res.json({ error });
    }
  }
};
module.exports.getUserById = async (req, res) => {
  try {
    let user = await userMode.findOne({ NID: req.params.NID });
    res.json({ success: true, user });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.UpdateUser = async (req, res) => {
  try {
    await userMode.updateMany({ NID: req.body.NID }, req.body);
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};
module.exports.UpdateUserById = async (req, res) => {
  try {
    await userMode.updateMany({ _id: req.params.id }, req.body);
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};
module.exports.deleteUser = async (req, res) => {
  try {
    await userMode.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};


module.exports.addVoterExel = (req, res) => {
  console.log(req.file.path);
  let objData = importExcelData2MongoDB(req.file.path);

  userMode.insertMany(objData, (err, data) => {
    if (err) {
      console.log(err);
      res.json(err);
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
      D: "city",
      E: "state",
      F: "status",
      G: "gender",
      H: "birthday",
      I: "template",
    },
    // name: "sheet1",
  });
  // -> Log Excel Data to Console
  console.log(excelData.Sheet1[0]);
  return excelData.Sheet1[0];
}

