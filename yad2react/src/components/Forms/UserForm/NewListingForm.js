import React from "react";
import ExpandedField from "../ExpandedField";
import fieldsObj from "../../../utils/listingObj";
import { Formik, Form, Field } from "formik";
import { navigate } from "hookrouter";
import OrangeCheckbox from "../../utils/OrangeCheckbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox } from "formik-material-ui";

const NewListingForm = ({ accessDB, nextURL }) => {
  const requiredFieldMessage = "שדה חובה";
  const title = "מודעה חדשה";
  const notRequiredFields = [];
  const handleSubmit = async values => {
    console.log(values);

    const res = await accessDB();
    if (nextURL) navigate(nextURL);
  };

  const validate = values => {
    const errors = {};
    console.log(values);
    
    // for (let [key, value] of Object.entries(values)) {
    //   if (notRequiredFields.includes(key)) continue; //add not requierd fields here
    //   if (!value) errors[key] = requiredFieldMessage;
    // }

    return errors;
  };

  const fieldsValues = {};
  for (let field of fieldsObj) {
    fieldsValues[field.type] = field.value;
  }

  return (
    <div id="updateFormContainer">
      <h1>{title}</h1>
      <Formik
        initialValues={fieldsValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form id="expendedForm">
            {fieldsObj.map(field => {
              if (field.name)
                return (
                  <FormControlLabel
                    control={
                      <Field
                        component={OrangeCheckbox}
                        onClick={() => field.value = !field.value}
                        type={field.type}
                        value={field.value}
                        inputProps={{type: 'checkbox'}}
                      />
                    }
                    label={field.text}
                  />
                );

              return (
                <ExpandedField
                  key={field.type}
                  text={field.text}
                  type={field.type}
                />
              );
            })}
            <button type="submit">עדכן נתונים</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewListingForm;
