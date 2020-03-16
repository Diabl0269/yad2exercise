const usersModel = require("../mongoDB/models/usersModel");

module.exports = async (req, res, next) => {
  try {
    res.user = await usersModel.login(req.body.email, req.body.password);    
    next();
} catch {
    res.sendStatus(404);
  }
};
