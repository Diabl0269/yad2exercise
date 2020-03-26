const addListing = require('./routes/addListing')
const auth = require('../middleware/auth')
const authRoute = require('./routes/auth')
const addMedia = require('./routes/addMedia');
const deleteMedia = require('./routes/deleteMedia')
const deleteUser = require('./routes/deleteUser');
const getListings = require('./routes/getListings')
const getUser = require('../middleware/users/getUser')
const getUserRoute = require('./routes/getUser')
const login = require('./routes/login')
const signUp = require('./routes/signUp')
const updateUser = require('./routes/updateUser')

module.exports = app => {
  app.use('/listings', getListings)

  app.use('/listings', auth)
  app.use('/listings', addListing)

  app.use('/media', auth, getUser)
  app.use('/media', deleteMedia)
  app.use('/media', addMedia)

  app.use('/users', login)
  app.use('/users', signUp)

  app.use('/users', auth)
  app.use('/users', authRoute)
  app.use('/users', deleteUser)
  app.use('/users', getUserRoute)
  app.use('/users', updateUser)
  app.use('/users/listings', getUser, getListings)
}
