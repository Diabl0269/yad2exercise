const addListing = require("../../middleware/listings/addLIsting");
const express = require("express");
const logMessage = require("../../middleware/logMessage");
const multer = require("multer");
const parseNewListingBody = require('../../middleware/parseNewListingBody');
const upload = multer();
const uploadMedia = require("../../middleware/media/uploadMedia");
const router = express.Router();
const getUser = require('../../middleware/users/getUser');

const fieldSize = "10mb";

module.exports = router.post(
  "/add",
  upload.fields([
    { name: "images", fieldSize },
    { name: "videos", fieldSize }
  ]),
  getUser,
  parseNewListingBody,
  uploadMedia,
  addListing,
  logMessage,
  (req, res) => {
    if (req.error) res.sendStatus(500);
    else res.sendStatus(201);
  }
);
