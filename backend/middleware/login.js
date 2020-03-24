const usersModel = require("../mongoDB/models/usersModel");

module.exports = async (req, res, next) => {  
  try {    
    res.user = await usersModel.login(req.body.email, req.body.password);
    req.message = "User logged in";    
    next();
  } catch (e) {
    req.error = e;
    req.message = "User failed to log in";
    next();
  }
};
