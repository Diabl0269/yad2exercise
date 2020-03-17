const usersModel = require("../mongoDB/models/usersModel");

module.exports = async (req, res, next) => {
  try {
    res.user = await usersModel.findById(req.params.id).exec();
    for (let [key, value] of Object.entries(req.body)) {
      if (value) res.user.userDetails[key] = value;
    }    
    await res.user.save();
    next();
  } catch (e) {
    res.sendStatus(400);
  }
};
