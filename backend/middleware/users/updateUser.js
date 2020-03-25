module.exports = async (req, res, next) => {  
  try {
    for (let [key, value] of Object.entries(req.body)) {
      if (value) req.user.userDetails[key] = value;
    }    
    await req.user.save();    
    next();
  } catch (e) {
    res.sendStatus(500);
  }
};
