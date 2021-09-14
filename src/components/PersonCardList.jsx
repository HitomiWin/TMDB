import React from "react";
import { Container, Row } from "react-bootstrap";
import PersonCard from "./PersonCard";

const PersonCardList = ({ cast }) => {
  return (
    <Container className="my-5">
      <h1>Cast</h1>
      <Row className="personcard-list  flex-nowrap overflow-scroll">
        {cast?.map((person) => (
          <PersonCard person={person} key={person.id} />
        ))}
      </Row>
    </Container>
  );
};

export default PersonCardList;
