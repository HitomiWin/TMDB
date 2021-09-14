import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieCardList = ({ data }) => {
  return (
    <>
      <Row className="moviecard-list  flex-nowrap overflow-scroll">
        {data &&
          data.results.map((result, i) => <MovieCard key={i} movie={result} />)}
      </Row>
    </>
  );
};

export default MovieCardList;
