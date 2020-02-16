const express = require("express");
const router = express.Router();
const listingsModel = require("../../mongoDB/models/listingsModel");


module.exports = router.get("/get", (req, res, next) => {
  listingsModel.find({}).populate('listingUser').exec((err, foundData) => {
    if(err) return console.log(err);
    foundData.forEach(listing => {console.log(listing.populate('listingUser'));
     listing.populate('listingUser')});
    res.send(foundData);
  });
});
