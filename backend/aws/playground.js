require("dotenv").config({ path: __dirname + "/../.env" });
const { s3, params } = require('./s3');

// var params = {
//   Bucket: process.env.AWS_BUCKET_NAME
//   // Key: "jerry.png"
// };

// getMedia = () => {}
// s3.getObject(params, (err, data) => {
//   if (err) console.log(err, err.stack);
//   else console.log(data);
// });

// s3.listObjects(params, (err, data) => {
//   if (err) console.log(err, err.stack);
//   else console.log(data);
// });
// const test = async () => {
//   const res = await s3.listObjects(params);
//   console.log('hey', res);
// }
// test()
