const express = require('express')
const router = express.Router()
const deleteAllMedia = require('../../middleware/media/deleteAllMedia')
const deleteListing = require('../../middleware/listings/deleteListing');
const logMessage = require('../../middleware/logMessage');

module.exports = router.delete('/:id', deleteListing, deleteAllMedia, logMessage, (req, res) => {
  const status = req.error ? 500 : 204
  res.sendStatus(status)
})
