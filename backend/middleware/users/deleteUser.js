const users = require('../../mongoDB/models/usersModel');


module.exports = async (req, res, next) => {
    const successMessage = 'User deleted successfully \n'
    const errorMessage = 'Unabel to delete user \n'
    const {userID} = req
    try {
        const res = await users.findByIdAndDelete(userID)
        console.log(res);
        req.message += successMessage
        next()
    } catch (e) {
        req.error = e
        req.message += errorMessage
        next()
    }
}