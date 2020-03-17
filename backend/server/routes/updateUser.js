const express = require('express')
const router = express.Router();
const updateUser = require('../../middleware/updateUser');

module.exports = router.patch('/:id', updateUser ,(req, res) => {    
    if(!res.user) return res.sendStatus(500);
    res.status(200).send(res.user);
})