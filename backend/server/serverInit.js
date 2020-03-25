const addListing = require('./routes/addListing')
const auth = require('../middleware/auth')
const authRoute = require('./routes/auth')
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

  app.use('/users', login)
  app.use('/users', signUp)

  app.use('/users', auth)
  app.use('/users', getUserRoute)
  app.use('/users', authRoute)
  app.use('/users', updateUser)
  app.use('/users/listings',getUser, getListings)
}
