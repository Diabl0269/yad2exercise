const logMessage = require('../../middleware/logMessage')
const getUserListings = require('../../middleware/users/getUserListings');

module.exports =
  ('/listings',
  getUserListings,
  logMessage,
  (req, res) => {
    const { count, userListings } = req
    let status = 200
    if (req.error) status = 500
    if (userListings.length === 0) status = 204
    res.status(status).send({ userListings, count })
  })
