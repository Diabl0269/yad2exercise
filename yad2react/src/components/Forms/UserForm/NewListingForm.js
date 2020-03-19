import React, { useState } from "react";
import ExpandedField from "../ExpandedField";
import fieldsObj from "../../../utils/listingObj";
import { Formik, Form } from "formik";
import { navigate } from "hookrouter";
import FormGroup from "@material-ui/core/FormGroup";
import DatePicker from "./NewListingFormFields/DatePicker";
import Attributes from "./NewListingFormFields/Attributes";

import CityAutoComplete from "./NewListingFormFields/CityAutoComplete";
import MediaUpload from "./NewListingFormFields/MediaUpload";

const NewListingForm = ({ accessDB, nextURL }) => {
  const requiredFieldMessage = "שדה חובה";
  const title = "מודעה חדשה";
  const notRequiredFields = [];
  const [selectedDate, handleDateChange] = useState(new Date());
  const handleSubmit = async values => {
    //   const res = await accessDB();
    //   if (nextURL) navigate(nextURL);
  };

  const validate = values => {
    const errors = {};

    for (let [key, value] of Object.entries(values)) {
      if (notRequiredFields.includes(key)) continue; //add not requierd fields here
      if (!value) errors[key] = requiredFieldMessage;
    }

    return errors;
  };

  const fieldsValues = {};
  for (let field of fieldsObj) {
    fieldsValues[field.type] = field.value;
  }

  return (
    <div id="newListingContainer">
      <h1>{title}</h1>
      <Formik
        initialValues={fieldsValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form id="newListingForm">
            <FormGroup>
              {fieldsObj.map(field => {
                if (field.type === "city") {
                  const value = values[field.type];
                  return (
                    <CityAutoComplete
                      field={field}
                      value={value}
                      setFieldValue={setFieldValue}
                    />
                  );
                }
                if (field.name === "date") return <DatePicker field={field} />;
                if (
                  field.type === "imageBase64" ||
                  field.type === "videoBase64"
                )
                  return <MediaUpload field={field} setFieldValue={setFieldValue}/>;
                if (field.name === "attributes")
                  return <Attributes field={field} />;
                if (field.type === "furnitureDescription")
                  return (
                    <ExpandedField
                      className="full-row"
                      field={field}
                      component="textarea"
                    />
                  );
                return <ExpandedField className="full-row" field={field} />;
              })}
            </FormGroup>
            <button type="submit">עדכן נתונים</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewListingForm;
