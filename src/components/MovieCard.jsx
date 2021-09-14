import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";

const MovieCard = ({ movie }) => {
  const history = useHistory();
  const posterUrl = useGetPoster(movie.poster_path);
  return (
    <>
      {movie && (
        <Col
          xs={6}
          md={3}
          lg={2}
          onClick={() => {
            history.push(`/movie/${movie.id}`);
          }}
          className={"my-3 movie-card-wrapper"}
        >
          <Card className="movie-card">
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body className={"d-flex flex-column justify-content-between"}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>Release date: {movie.release_date}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default MovieCard;
