const express = require("express");
const router = express.Router();
const listingsModel = require("../../mongoDB/models/listingsModel");

module.exports = router.post("/add", (req, res, next) => {
  const newListing = req.body;

  listingsModel.create(newListing, (err, listing) => {
    if (err) res.status(400).send(err);
    else res.send({ msg: "הרשומה נוספה בהצלחה" });
  });
});
