const express = require("express");
const router = express.Router();
const getUser = require('../../middleware/getUser');

module.exports = router.get('/' ,(req, res, next) => {
    if(!req.user) return res.sendStatus(404)
    res.status(200).send(req.user);
})