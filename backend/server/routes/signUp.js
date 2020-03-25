const express = require("express");
const router = express.Router();
const generateAuthToken = require('../../middleware/generateAuthToken');
const signUp = require("../../middleware/users/signUp");

module.exports = router.post("/sign-up", signUp, generateAuthToken, (req, res) => {
  if(!res.user) res.sendStatus(500)
  res.status(201).send(res.user)
});
