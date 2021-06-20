import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Saved() {
  return (
    <div>
      <Hero backgroundImage="">
        <h1>(React) Google Books Search</h1>
        <h2>Search for and Save Books of Interest</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Saved</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;
