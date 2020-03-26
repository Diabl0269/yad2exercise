module.exports = async (req, res, next) => {  
const successMessage = 'User update succefully'
const errorMessage = 'Unable to update user'
  try {
    for (let [key, value] of Object.entries(req.body)) {
      if (value) req.user.userDetails[key] = value;
    }    
    await req.user.save();    
    req.message += successMessage;
    next();
  } catch (e) {
    req.error = e
    req.message += errorMessage
    next()
  }
};
