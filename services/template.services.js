const templateModel = require("../models/template.model");
module.exports.addTemplate = async (req, res) => {
    console.log(req.body);
  const template = await templateModel.find();
  console.log(template);
  if (template.length>0) {
    try {
      await templateModel.updateMany({}, req.body);
      res.json({ success: true });
    } catch (error) {
      res.json({ error });
    }
  } else {
    try {
        const {template}=req.body
      await templateModel.insertMany({template});
      res.json({ success: true });
    } catch (error) {
      res.json({ error });
    }
  }
};

module.exports.getTemplate = async (req, res) => {
  try {
 let template= await templateModel.findOne({});
    res.json({ success: true,template:template.template });
  } catch (error) {
    res.json({ error });
  }
};


module.exports.deleteTemplate = async (req, res) => {
  try {
    await templateModel.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};
