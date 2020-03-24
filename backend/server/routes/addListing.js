const addListing = require("../../mongoDB/crud/listings/addLIsting");
const express = require("express");
const logMessage = require("../../middleware/logMessage");
const multer = require("multer");
const parseNewListingBody = require('../../middleware/parseNewListingBody');
const upload = multer();
const uploadMedia = require("../../middleware/uploadMedia");
const fieldSize = "10mb";
const router = express.Router();

module.exports = router.post(
  "/add",
  upload.fields([
    { name: "images", fieldSize },
    { name: "videos", fieldSize }
  ]),
  parseNewListingBody,
  uploadMedia,
  addListing,
  logMessage,
  (req, res) => {
    if (req.error) res.sendStatus(500);
    else res.sendStatus(201);
  }
);
