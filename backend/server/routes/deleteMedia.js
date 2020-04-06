const express = require('express')
const router = express.Router()
const deleteMedia = require('../../middleware/media/deleteMedia')
const logMessage = require('../../middleware/logMessage')

module.exports = router.delete('/:listingId/:mediaId', deleteMedia, logMessage, (req, res) => {
  const status = req.error ? 500 : 204
  res.sendStatus(status)
})
