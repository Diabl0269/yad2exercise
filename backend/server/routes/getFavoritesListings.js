const express = require('express')
const router = express.Router()
const getFavoritesListings = require('../../middleware/users/getFavoritesListings')
const fixFilterDefaults = require('../../middleware/fixFilterDefaults')
const logMessage = require('../../middleware/logMessage')

module.exports = router.post(
  '/',
  fixFilterDefaults,
  getFavoritesListings,
  logMessage,
  (req, res) => {
    if (req.error) return res.sendStatus(500)
    const { listings, count } = res

    res.status(200).send({ listings, count })
  }
)
