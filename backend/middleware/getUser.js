const usersModel = require("../mongoDB/models/usersModel");

module.exports = async (req, res, next) => {
  try {
    res.user = await usersModel.findById(req.params.id).exec();
    next();
  } catch {
    res.sendStatus(404);
  }
};
