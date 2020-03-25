const express = require('express')
const router = express.Router();
const updateUser = require('../../middleware/users/updateUser');
const getUser = require('../../middleware/users/getUser');

module.exports = router.patch('/:id', getUser,updateUser ,(req, res) => {    
    if(!res.user) return res.sendStatus(500);
    res.status(200).send(res.user);
})