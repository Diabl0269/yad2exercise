import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import updateUser from "../../../communication/updateUser";
import UserContext from "../../../context/UserContext";
import Loader from "../../utils/Loader";
import ListingsContainer from '../../Listings/ListingsContainer';

export default () => {
  return <ListingsContainer />
}
