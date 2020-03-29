const express = require('express')
const router = express.Router()
const getUser = require('../../middleware/users/getUser');
const toggleFavorite = require('../../middleware/users/toggleFavorite');
const logMessage = require('../../middleware/logMessage');

module.exports = router.patch('/:id', getUser, toggleFavorite, logMessage,(req, res) => {
    const status = req.error ? 500 : 204;
    res.sendStatus(status)
})