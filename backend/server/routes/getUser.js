const express = require("express");
const router = express.Router();
const getUser = require('../../middleware/getUser');

module.exports = router.get('/:id', getUser ,(req, res, next) => {
    if(!res.user) return res.sendStatus(404)
    res.status(200).send(res.user);
})