const express = require("express");
const router = express.Router();
const signUp = require("../../mongoDB/crud/users/signUp");

module.exports = router.post("/signUp", signUp, (req, res) => {    
  res.status(200).send();
});
