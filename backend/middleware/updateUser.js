const usersModel = require("../mongoDB/models/usersModel");

module.exports = async (req, res, next) => {
  console.log(req.params);
  
  try {
    res.user = await usersModel.findById(req.params.id).exec();
    for (let [key, value] of Object.entries(req.body)) {
      if (value) res.user.userDetails[key] = value;
    }    
    await res.user.save();
    console.log(res.user);
    
    next();
  } catch (e) {
    res.sendStatus(400);
  }
};
