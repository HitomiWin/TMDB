import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

import { useGenresContext } from "../contexts/GenresContext";

const GenresButtons = () => {
  const history = useHistory();
  const { getPage, getGenreName, data, isLoading, isError, error } =
    useGenresContext();

  if (isLoading) return <Spinner animation="border" size="sm" />;

  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  const handleOnClick = (id, name) => {
    getPage(1);
    getGenreName(name);
    history.replace(`/movies/genres/${id}`);
  };

  return (
    <>
      {data?.genres &&
        data.genres.map((genre) => (
          <Button
            key={genre.id}
            variant="outline-dark"
            size="sm"
            className="m-1 rounded-pill"
            onClick={() => handleOnClick(genre.id, genre.name)}
          >
            {genre.name}
          </Button>
        ))}
    </>
  );
};

export default GenresButtons;
