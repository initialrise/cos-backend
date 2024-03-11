const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const itemController = require("./controllers/itemController");
const adminController = require("./controllers/adminController");
const viewController = require("./controllers/viewController");
const cors = require("cors");

dotenv.config();
const app = express();
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connection Succesful");
});
app.use(cors());
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");

app.route("/login").get(viewController.login).post(adminController.checkLogin);
app.get("/dashboard", viewController.dashboard);
app.get("/items", itemController.getItems);
app.post("/items", itemController.createItem);
app.listen(1234, () => {
  console.log("Listening on port 1234");
});
exports.default = app;
