const express = require('express')
const router = express.Router()
const deleteAllMedia = require('../../middleware/media/deleteAllMedia')
const deleteListing = require('../../middleware/listings/deleteListing');
const getUser = require('../../middleware/users/getUser');
const logMessage = require('../../middleware/logMessage');

module.exports = router.delete('/:id', getUser, deleteListing, deleteAllMedia, logMessage, (req, res) => {
  const status = req.error ? 500 : 204
  res.sendStatus(status)
})
