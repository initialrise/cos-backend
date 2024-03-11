const Item = require("../models/itemModel");
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().select("-__v");
    res.json({
      status: "success",
      data: {
        items,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err,
    });
  }
};

exports.createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "fail", err });
  }
};
