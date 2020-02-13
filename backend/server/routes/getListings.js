const express = require("express");
const router = express.Router();
const listingsModel = require("../../mongoDB/models/listingsModel");

module.exports = router.get("/get", (req, res, next) => {
  listingsModel.find({}, (err, foundData) => {
    res.send(foundData);
  });
});
