import axios from "axios";
import mapStateToData from "../utils/mapStateToData";

export default async userDetails => {
  const data = mapStateToData(userDetails);
  const res = await axios.post("/users/signup", data);
  console.log(res.config.data);
};
