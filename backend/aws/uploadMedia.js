const s3 = require("./s3");
const { v4 } = require("uuid");
require("dotenv").config({ path: __dirname + "/../.env" });

module.exports = async (req, res, next) => {
  console.log(req.body);

  const mediaID = v4();
    
  const { images, videos } = req.body;
  if (images || videos)
    try {
    //   const media = [ ...images, ...videos ];
      console.log(images[0], ':', videos);
      
    //   const params = {
    //     Bucket: process.env.AWS_BUCKET_NAME,
    //     Body: media,
    //     key: mediaID
    //   };
    //   const response = await s3.upload(params, (err, data) => {
    //     console.log(err);
    //     console.log(data);
    //   });
    //   console.log("hey from agter upload", response);
    } catch (e) {
      console.log(e);
    }
};
