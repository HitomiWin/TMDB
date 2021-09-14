import React, { memo } from "react";
import { Button } from "react-bootstrap";
import { useGenresContext } from "../contexts/GenresContext";

const PaginationButtons = memo(
  // stop to rerender unnecessary
  ({ totalPages, isPreviousData }) => {
    const { page, getPage } = useGenresContext();
    return (
      <div className="d-flex justify-content-between align-items-center my-3">
        <Button
          onClick={() => getPage((current) => Math.max(current - 1, 1))}
          disabled={page === 1}
          variant="dark"
        >
          Prev
        </Button>

        <h5>Current Page: {page}</h5>

        <Button
          onClick={() => {
            if (!isPreviousData && page !== totalPages)
              getPage((current) => current + 1);
          }}
          disabled={isPreviousData || page === totalPages}
          variant="dark"
        >
          Next
        </Button>
      </div>
    );
  }
);

export default PaginationButtons;
