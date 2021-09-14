import React from "react";
import PersonCardList from "../components/PersonCardList";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieDetails } from "../services/TMDBApi";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";

const MovieDetailsPage = () => {
  const { movie_id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["movie", movie_id],
    () => getMovieDetails(movie_id)
  );

  const posterUrl = useGetPoster(data?.poster_path);
  if (isLoading) return <Spinner animation="border" size="sm" />;
  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  return (
    data && (
      <Container>
        <Card className={"mt-3 border-0"}>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Card.Img src={posterUrl} />
            </Col>

            <Col sm={12} md={6} lg={9}>
              <Card.Title className={"mt-2"}>{data.original_title}</Card.Title>
              <Card.Text>
                Release: {data.release_date} / {data.runtime} mins
              </Card.Text>
              <Card.Text>
                {data.genres.map((genre) => genre.name).join(" ")}
              </Card.Text>
              <Card.Title>Overview</Card.Title>
              <Card.Text>{data.overview}</Card.Text>
            </Col>
          </Row>
        </Card>
        <PersonCardList cast={data.credits.cast} />
      </Container>
    )
  );
};
export default MovieDetailsPage;
