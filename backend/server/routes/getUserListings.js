const express = require('express')
const router = express.Router()
const logMessage = require('../../middleware/logMessage')
const getUserListings = require('../../middleware/users/getUserListings')

module.exports = router.post('/', getUserListings, logMessage, (req, res) => {
  if (req.error) return res.sendStatus(500)
  const { listings = [], count } = res
  console.log(listings);
  
  res.status(200).send({ listings, count })
})
