const express = require("express");
const router = express.Router();
const login = require('../../middleware/users/login');
const logMessage = require('../../middleware/logMessage');

module.exports = router.post("/login", login, logMessage ,(req, res, next) => {       
  if(!res.user) return res.sendStatus(404);
   res.status(200).send(res.user);  
});
