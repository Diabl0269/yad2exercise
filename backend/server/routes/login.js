const express = require("express");
const router = express.Router();
const login = require('../../middleware/login');

module.exports = router.post("/login", login ,(req, res, next) => {        
  if(!res.user) res.sendStatus(500);
   res.status(200).send(res.user);  
});
