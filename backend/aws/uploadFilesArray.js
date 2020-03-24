const { s3, params } = require("./s3");
const { v4 } = require("uuid");

module.exports = async files => {
  const mediaKeys = [];
  if (!Array.isArray(files)) return mediaKeys;
  let mediaKey;
  await files.forEach(async file => {
    mediaKey = v4();
    params.Key = mediaKey;
    params.Body = file.buffer;
    await s3.upload(params, (err, data) => {
      if (err) throw Error(err);
    });
    mediaKeys.push(mediaKey);
  });

  return mediaKeys;
};
