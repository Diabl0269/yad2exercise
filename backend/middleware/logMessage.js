const { success, failure } = require("../utils/messageColor");

module.exports = (req, res, next) => {  
  if (req.error) console.log(failure(req.message), "\n", req.error);
  else console.log(success(req.message));
  next();
};
