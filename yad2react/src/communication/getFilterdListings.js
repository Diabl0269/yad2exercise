import axios from "axios";
import mapStateToData from "../utils/mapStateToData";

const getFilterdListings = async (queryObj, dispatch) => {
  dispatch([]);
  const queryData = mapStateToData(queryObj);
  const res = await axios.post("/listings", queryData);
  if (res.data.length === 0)
    return (document.querySelector("#loader").innerHTML = "לא נמצאו רשומות");
  queryObj.count[1](res.data.count);
  dispatch(res.data.listings); 
};

export default getFilterdListings;
