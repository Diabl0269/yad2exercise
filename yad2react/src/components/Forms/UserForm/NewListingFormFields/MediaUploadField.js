import React, { useState } from "react";
import { useFormikContext } from "formik";

export default ({ field: { type, text } }) => {
  const [filesMessage, setFilesMessage] = useState("העלה מדיה");
  const { setFieldValue } = useFormikContext();

  const changeHandler = async e => {
    e.preventDefault();
    const { files } = e.target;
    if (!!files.length) setFilesMessage(files.length);
    setFieldValue(type, files);
  };

  return (
    <div key={type}>
      {text + ":"}
      <label id="uploadMedia">
        {filesMessage}
        <input
          onChange={e => changeHandler(e)}
          type="file"
          id="upload"
          multiple
          className="width-half"
          accept={`${type === "images" ? "image" : "video"}/*`}
        />
      </label>
    </div>
  );
};
