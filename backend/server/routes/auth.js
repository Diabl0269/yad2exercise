const express = require('express')
const router = express.Router()

module.exports = router.get('/auth', (req, res) => {    
    res.sendStatus(200);
})