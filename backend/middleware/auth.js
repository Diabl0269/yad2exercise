const jwt = require('jsonwebtoken')
const usersModel = require('../mongoDB/models/usersModel');
require("dotenv").config({ path: __dirname + "/../.env" });

const auth = async (req, res, next) => {
    try {                        
        const token = req.header('Authorization').replace('Bearer ', '')        
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)        
        const user = await usersModel.findOne({ _id: decoded._id, 'tokens.token': token })       
        if (!user) {
            throw new Error()
        }
        res.user = user
        next()
    } catch (e){        
        res.sendStatus(401);
    }
}

module.exports = auth