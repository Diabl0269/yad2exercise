const express = require('express')
const router = express.Router()
const deleteUser = require('../../middleware/users/deleteUser');
const logMessage = require('../../middleware/logMessage');

module.exports = router.delete('/', deleteUser, logMessage, (req, res) => {
    const status = req.error ? 204 : 500;
    res.sendStatus(status)
})