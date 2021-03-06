require("dotenv").config({ path: __dirname + "/../.env" });

//Make sure you have 'AWS_ACCESS_KEY_ID' and 'AWS_SECRET_ACCESS_KEY' in a .env file
const S3 = require("aws-sdk/clients/s3");

module.exports = {
  s3: new S3(),
  params: {
    Bucket: process.env.AWS_BUCKET_NAME
  }
};
