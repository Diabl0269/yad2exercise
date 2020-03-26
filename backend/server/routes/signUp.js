const express = require("express");
const router = express.Router();
const generateAuthToken = require('../../middleware/generateAuthToken');
const signUp = require("../../middleware/users/signUp");
const logMessage = require('../../middleware/logMessage');

module.exports = router.post("/sign-up", signUp, generateAuthToken, logMessage, (req, res) => {
  if(!res.user) res.sendStatus(422)
  res.status(201).send(res.user)
});
