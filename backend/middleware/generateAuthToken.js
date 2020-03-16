module.exports = (req, res, next) => {
  try {
    res.user.generateAuthToken();
    next();
  } catch {
    res.sendStatus(500);
  }
};
