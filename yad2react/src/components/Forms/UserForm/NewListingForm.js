import React, { useState } from "react";
import fieldsObj from "../../../utils/listingObj";
import { Formik, Form } from "formik";
import { navigate } from "hookrouter";
import FormGroup from "@material-ui/core/FormGroup";
import addListing from "../../../communication/addListing";
import FormFields from "./NewListingFormFields/FormFields";

const NewListingForm = () => {
  const title = "מודעה חדשה";
  const serverErrorMessage = "תקלת שרת, אנה נסה שנית מאוחר יותר";
  const [displayServerErrorMessage, setDisplayServerErrorMessage] = useState(
    false
  );
  const fieldsValues = {};
  for (let field of fieldsObj) {
    fieldsValues[field.type] = field.value;
  }

  const handleSubmit = async values => {

    if (await addListing(values)) {
      alert("המודעה נוספה בהצלחה");
      //   //   return if (nextURL) navigate(nextURL);
    }
    setDisplayServerErrorMessage(true);
  };

  const validate = values => {
    const errors = {};

    //Add Errors here
    // fieldsObj.forEach(({ type, name, notReuired }) => {
    //   const key = type;
    //   const value = values[key];
    //   if (name === "attributes" || notReuired) return; //add not requierd fields here
    //   if (!value) errors[key] = requiredFieldMessage;
    // });

    return errors;
  };

  return (
    <div id="newListingContainer">
      <h1>{title}</h1>
      {displayServerErrorMessage && serverErrorMessage}
      <Formik
        initialValues={fieldsValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            <FormFields fields={fieldsObj} />
          </FormGroup>
          <button type="submit">העלה מודעה</button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewListingForm;
