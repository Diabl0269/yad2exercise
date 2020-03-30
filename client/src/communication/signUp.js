import axios from "axios";
import mapStateToData from "../utils/mapStateToData";

export default async userDetails => {
  const data = mapStateToData(userDetails);
  try {
    const { data: user } = await axios.post("/users/sign-up", data);
    const { tokens } = user;
    const { token } = tokens[tokens.length - 1];
    localStorage.setItem("token", token);
    
    return user;
  } catch (error) {
    return;
  }
};
