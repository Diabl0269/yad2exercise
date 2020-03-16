import axios from "axios";

export default async loginObj => {
  try {
    const res = await axios.post("/users/login", loginObj);    
    const isEmptyObj =
    Object.keys(res.data).length === 0 && res.data.constructor === Object;
  return isEmptyObj ? null : res.data;
  } catch {
    return null;
  }
};
