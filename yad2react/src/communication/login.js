import axios from "axios";

export default async loginObj => {
  try {
    const res = await axios.post("/users/login", loginObj);    
    localStorage.setItem('token', res.data.tokens[res.data.tokens.length - 1].token)
    return res.data._id;
  } catch {
    return;
  }
};
