import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../services/TMDBApi";
import PaginationButtons from "./PaginationButtons";
import { useUrlSearchParams } from "use-url-search-params";
import { useGenresContext } from "../contexts/GenresContext";

const AllMoviesCard = ({ title }) => {
  const { genre_id } = useParams();
  const [params, setParams] = useUrlSearchParams({ page: 1 }, { page: Number });
  const { page, genreName } = useGenresContext();

  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ["movies-genre", genre_id, params.page],
    () => getMoviesByGenre(genre_id, params.page),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setParams({ ...params, page });
    // eslint-disable-next-line
  }, [genre_id, page]);

  if (isLoading) return <Spinner animation="border" size="sm" />;
  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  return (
    <>
      <h1>
        {title} {genreName}
      </h1>
      <Container className="px-0">
        <Row className="px-0">
          {data?.results &&
            data.results.map((movie, i) => <MovieCard key={i} movie={movie} />)}
        </Row>
        <PaginationButtons
          totalPages={data.total_pages}
          isPreviousData={isPreviousData}
        />
      </Container>
    </>
  );
};

export default AllMoviesCard;
