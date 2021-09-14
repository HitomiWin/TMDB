import React from "react";
import { Container } from "react-bootstrap";
import CategorizedMovies from "../components/CategorizedMovies";

const Home = () => {
  return (
    <Container>
      <CategorizedMovies type={"popular"} title={"Whats Popular"} />

      <CategorizedMovies type={"now_playing"} title={"Plaing Now"} />

      <CategorizedMovies type={"top_rated"} title={"Top 20"} />
    </Container>
  );
};

export default Home;
