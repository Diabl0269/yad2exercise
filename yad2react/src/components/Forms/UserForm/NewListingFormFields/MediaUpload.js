import React, { useState } from "react";

export default ({ field, setFieldValue }) => {
  const { text, type } = field;
  const filesMessage = useState("העלה מדיה");

  const changeHandler = async (e) => {
      const {files} = e.target;
      const data = new FormData()
      data.append('file',files[0])
      console.log(data);
      console.log(files[0]);
      
      
      
    //   const dataBuffer = await fs.readFile(e.target.value)
    //   console.log(dataBuffer);
      
       
  };

  return (
    <div>
      {text + ":"}{" "}
      <label id="uploadMedia">
        {filesMessage}
        <input
          onChange={e => changeHandler(e)}
          type="file"
          id="upload"
          multiple
          className="width-half"
          accept={`${type === 'imageBase64' ? 'image' : 'video'}/*`}
        />
      </label>
    </div>
  );
};
