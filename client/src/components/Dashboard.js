import React from "react";
import { Container, Stack, Button, Card } from "react-bootstrap";
import CustomCard from "../widgets/CustomCard.js";
import HistoryCard from "../widgets/HistoryCard.js";
import ApplyModal from "./ApplyModal.js";
import { useState } from "react";

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="my-4 d-flex flex-row justify-content-around">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Loan Management App</h1>
          <Button variant="primary" onClick={handleShow}>
            Apply
          </Button>
          <Button variant="outline-primary" onClick="">
            Pay
          </Button>
        </Stack>
      </Container>
      <Container>
        <h2> Current Loans </h2>
      </Container>

      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <Container>
      <div className= "mt-5"><h2> Loan History </h2></div>

      </Container>

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </>
  );
}

export default Dashboard;
