const { s3, params } = require('../aws/s3');

module.exports = idsArray => {
    idsArray.forEach(async id => {
        params.Key = id
        await s3.deleteObject(params)
    })
}