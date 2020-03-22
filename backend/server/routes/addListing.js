const express = require("express");
const router = express.Router();
const addListing = require("../../mongoDB/crud/listings/addLIsting");
const uploadMedia = require('../../aws/uploadMedia');

module.exports = router.post("/add", uploadMedia, addListing, (req, res, next) => {  
  if (res.locals.error) res.status(500).send(res.locals.error);
  else res.status(201).send(res.locals.message);
});
