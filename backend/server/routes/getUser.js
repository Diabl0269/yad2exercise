const express = require("express");
const router = express.Router();
const logMessage = require('../../middleware/logMessage');
const getUser = require('../../middleware/users/getUser');

module.exports = router.get('/', getUser,logMessage ,(req, res) => {
    if(!req.user) return res.sendStatus(404)
    res.status(200).send(req.user);
})