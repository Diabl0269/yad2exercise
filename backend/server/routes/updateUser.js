const express = require('express')
const router = express.Router()
const updateUser = require('../../middleware/users/updateUser')
const getUser = require('../../middleware/users/getUser')
const logMessage = require('../../middleware/logMessage')

module.exports = router.patch(
  '/:id',
  getUser,
  updateUser,
  logMessage,
  (req, res) => {
    if (req.error) return res.sendStatus(500)
    res.status(200).send(res.user)
  }
)
