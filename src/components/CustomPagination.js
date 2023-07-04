import React from "react";
import Pagination from "@mui/material/Pagination";

function CustomPagination({ numberOfPages = 10, setPage }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        color:"white"
      }}
    >
      <Pagination
        count={numberOfPages}
        hideNextButton
        hidePrevButton
        color="primary"
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
}

export default CustomPagination;
