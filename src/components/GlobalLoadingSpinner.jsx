import React from "react";
import { Spinner } from "react-bootstrap";
import { useIsFetching } from "react-query";

const GlobalLoadingSpinner = () => {
  const isFetching = useIsFetching();
  return isFetching ? (
    <div className="loading-spinner">
      <Spinner animation="border" role="status" variant="secondary" />
    </div>
  ) : null;
};

export default GlobalLoadingSpinner;
