import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import FiltersContext from "../../context/FiltersContext";
import getFilterdListings from "../../utils/getFilterdListings";

const Pagination = () => {
  const { queryObj, dispatch } = useContext(FiltersContext);
  const pageCount = Math.ceil(queryObj.count[0] / 10);
  const dispatchSkip = queryObj.skip[1];
  const changePageHandler = pageNum => {
    const skipBy = pageNum.selected  * 10     
    dispatchSkip(skipBy)
    getFilterdListings(queryObj, dispatch);
  };
  return (
    <ReactPaginate
      containerClassName={"pagination--container"}
      previousLabel={"הקודם"}
      nextLabel={"הבא"}
      pageClassName={"pagination__unactive-page"}
      activeClassName={"pagination__active-page"}
      previousClassName={"pagination__ends-active"}
      nextClassName={"pagination__ends-active"}
      disabledClassName={"pagination__ends-disabled"}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      onPageChange={pageNum => changePageHandler(pageNum)}
    />
  );
};

export default Pagination;
