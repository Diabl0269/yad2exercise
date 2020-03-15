const express = require("express");
const router = express.Router();
const addListing = require("../../mongoDB/crud/listings/addLIsting");

module.exports = router.post("/", addListing, (req, res, next) => {
  if (res.locals.error) res.status(500).send(res.locals.error);
  else res.send(res.locals.message);
});
