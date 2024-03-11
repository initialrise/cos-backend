const Item = require("../models/itemModel");
exports.login = (req, res) => {
  res.render("login");
};
exports.dashboard = async (req, res) => {
  try {
    const items = await Item.find();
    res.render("dashboard", { items });
  } catch (err) {
    res.send("Something went wrong");
  }
};
