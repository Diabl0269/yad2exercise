const express = require('express')
const router = express.Router()
const logMessage = require('../../middleware/logMessage')
const updateListing = require('../../middleware/listings/updateListing');

module.exports = router.patch(
  '/:id',
  updateListing,
  logMessage,
  (req, res) => {
    const status = req.error ? 500 : 204 
    res.sendStatus(status)
  }
)
