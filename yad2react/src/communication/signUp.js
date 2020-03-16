import axios from "axios";
import mapStateToData from "../utils/mapStateToData";

export default async userDetails => {
  const data = mapStateToData(userDetails);
  try {
    const {data: user} = await axios.post("/users/sign-up", data);
    return user;    
  } catch (error) {
    return;
  }
};
