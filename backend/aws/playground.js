require("dotenv").config({ path: __dirname + "/../.env" });
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();

var params = {
  Bucket: process.env.AWS_BUCKET_NAME,
  Key: "jerry.png"
};

s3.getObject(params, (err, data) => {
  if (err) console.log(err, err.stack);
  else console.log(data);
});