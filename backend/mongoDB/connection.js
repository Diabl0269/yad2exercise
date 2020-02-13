const chalk = require('chalk');
require("dotenv").config({ path: __dirname + "/.env" });
const mongoose = require("mongoose");

const successMsg = chalk.black.bgGreen('mongo connection exists');
const errorMsg = chalk.black.bgRed('connection error:');

const db = mongoose.connection;
db.on("error", console.error.bind(console, errorMsg));
db.once("open", function() {
  console.log(successMsg);
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});