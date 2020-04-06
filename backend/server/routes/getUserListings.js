const express = require('express')
const router = express.Router()
const logMessage = require('../../middleware/logMessage')
const getUserListings = require('../../middleware/users/getUserListings')

module.exports = router.post('/', getUserListings, logMessage, (req, res) => {
  if (req.error) return res.sendStatus(500)
  const {
    user: { listings = [] }
  } = req

  res.status(200).send({ listings })
})
