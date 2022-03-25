import React from "react";
import { Container, ListGroup, Card, Button } from "react-bootstrap";

function HistoryCard() {
  return (
    <Container>
      <Card>
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title>Loan Name</Card.Title>
          <Card.Text>
            <h4>TypeID:</h4>
            <h4>Loan Amount:</h4>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HistoryCard;
