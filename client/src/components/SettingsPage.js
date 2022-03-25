import React from "react";
import { Form, Modal, Card, Button } from "react-bootstrap";

function SettingsPage() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://i.pinimg.com/originals/bf/0b/a2/bf0ba2802733bc3b36c545e7c1d6c4a4.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SettingsPage;
