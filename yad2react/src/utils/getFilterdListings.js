import axios from "axios";
import mapStateToData from "./mapStateToData";

const getFilterdListings = async (filtersState, dispatch) => {
  dispatch([])
  const filtersData = mapStateToData(filtersState);
  const res = await axios.post("/listings", filtersData);
  if (res.data.length === 0)
    document.querySelector("#loader").innerHTML = "לא נמצאו רשומות";
  dispatch(res.data);
};

export default getFilterdListings;