const s3 = require("./s3");
const { v4 } = require("uuid");
require("dotenv").config({ path: __dirname + "/../.env" });

module.exports = async (req, res, next) => {
  const {file} = req
  const mediaID = v4();
    
    try {      
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: file,
        key: mediaID
      };
      const response = await s3.upload(params, (err, data) => {
        console.log(err);
        console.log(data);
      });
      console.log("hey from agter upload", response);
    } catch (e) {
      console.log(e);
    }
};
