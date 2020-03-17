const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');

module.exports = router.get('/', auth,(req, res, next) => {
    if(!res.user) res.sendStatus(404)
    res.status(200).send(res.user);
})