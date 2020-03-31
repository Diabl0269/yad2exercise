import React, { useState } from "react";
import { useFormikContext } from "formik";
import MediaModal from "../../../utils/MediaModal";

export default ({ field: { type, text } }) => {
  const [filesMessage, setFilesMessage] = useState("העלה מדיה");
  const { setFieldValue, values } = useFormikContext();
  const value = values[type]
  
  const changeHandler = async e => {
    e.stopPropagation();
    const { files } = e.target;
    if (!!files.length) setFilesMessage(files.length);
    setFieldValue(type, files);
  };

  return (
    <div key={type} className='align-row'>
      {text + ":"}
      {!!value.length ? <MediaModal type={type}/> : <label id="uploadMedia">
        {filesMessage}
        <input
          onChange={e => changeHandler(e)}
          type="file"
          id="upload"
          multiple
          className="width-half"
          accept={`${type === "images" ? "image" : "video"}/*`}
        />
      </label>}
    </div>
  );
};
