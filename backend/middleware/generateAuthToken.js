module.exports = async (req, res, next) => {
  const successMessage = 'Auth token created succefully'
  const errorMessage = 'Unable to create token'
  try {
    await res.user.generateAuthToken();
    req.message += successMessage;
    next();
  } catch (e){
    req.error += e
    req.message += errorMessage
    next()
  }
};
