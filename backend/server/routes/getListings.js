const express = require("express");
const router = express.Router();
const getListings = require("../../mongoDB/crud/getListings");
const fixFilterDefaults = require('../../middleware/fixFilterDefaults')

module.exports = router.post("/", fixFilterDefaults ,getListings, (req, res, next) => {    
  if (res.locals.error) return res.status(500).send(res.locals.error);
  else res.status(200).send({listings: res.locals.data,count:  res.locals.count});  
});
