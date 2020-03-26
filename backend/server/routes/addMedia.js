const express = require("express");
const router = express.Router();
const multer = require("multer");
const parseNewListingBody = require('../../middleware/parseNewListingBody');
const uploadMedia = require('../../middleware/media/uploadMedia');
const logMessage = require('../../middleware/logMessage');
const upload = multer();

const fieldSize = "10mb";

module.exports = router.post(
  '/',
  upload.fields([
    { name: 'images', fieldSize },
    { name: 'videos', fieldSize }
  ]),
  parseNewListingBody,
  uploadMedia,
  logMessage,
  (req, res) => {
      const status = req.error ? 204 : 500
      res.sendStatus(status)
  }
)
