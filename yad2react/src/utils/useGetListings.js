import axios from "axios";
import mapStateToData from "./mapStateToData";
import { useContext } from "react";
import FiltersContext from "../context/FiltersContext";

const useGetListings = async () => {
  const { queryObj, dispatch, count } = useContext(FiltersContext);
  console.log(count);

  dispatch([]);
  const queryData = mapStateToData(queryObj);
  const res = await axios.post("/listings", queryData);
  if (res.data.length === 0)
    document.querySelector("#loader").innerHTML = "לא נמצאו רשומות";
  dispatch(res.data);
};

export default useGetListings;
