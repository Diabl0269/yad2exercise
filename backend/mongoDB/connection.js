require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const { success, failure } = require('../utils/messageColor');

const successMsg = success('mongo connection exists');
const errorMsg = failure('connection error:');

const db = mongoose.connection;
db.on("error", console.error.bind(console, errorMsg));
db.once("open", function() {
  console.log(successMsg);
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.set('useCreateIndex', true);