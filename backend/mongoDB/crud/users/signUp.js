const usersModel = require("../../models/usersModel");

module.exports = async (req, res, next) => {
  const { firstName, lastName, phone, phone2, email } = req.body;
  const userDetails = { firstName, lastName, email, phone, phone2, email };
  const detailsObj = { userDetails, password: req.body.password };
  const user = new usersModel(detailsObj);
  try {
    await user.save();
  } catch (e) {
    console.log('hey');
  }
};
