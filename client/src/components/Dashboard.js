import React from "react";
import { Container, Stack, Button, Card, Modal, Form } from "react-bootstrap";
import CustomCard from "../widgets/CustomCard.js";
import HistoryCard from "../widgets/HistoryCard.js";
import BalanceCard from "../widgets/BalanceCard.js";
import ApplyModal from "./ApplyModal.js";
import { useState } from "react";

function Dashboard() {
  const [showApply, setShowApply] = useState(false);
  const [showPay, setShowPay] = useState(false);

  const handleClose1 = () => setShowApply(false);
  const handleShow1 = () => setShowApply(true);

  const handleClose2 = () => setShowPay(false);
  const handleShow2 = () => setShowPay(true);

  //FOR ADDING LOAN 
  const [loan, setLoan] = useState("");

  //FOR PAYING
  const [pay, setPay] = useState("");
  const [loanId, setLoanId] = useState("");

  const [loansList, setLoansList] = useState([]);

  // const addLoan = () => {
  //   Axios.post("API_URL", {
  //     loanId: loanId,
  //     loan: loan,
  //   }).then(() => {
  //     setLoansListList([
  //       ...loansList,
  //       {
  //         loanId: loanId,
  //         loan: loan,
  //       },
  //     ]);
  //   });
  // };

  return (
    <>
      <Modal
        show={showApply}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Loan Amount</Form.Label>
              <Form.Control placeholder="Enter loan amount" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onChange={(e) => {
                setLoan(e.target.value);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showPay}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Pay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter loanId</Form.Label>
              <Form.Control
                placeholder="Enter loanId"
                onChange={(e) => {
                  setLoanId(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount to pay</Form.Label>
              <Form.Control
                placeholder="Enter amount"
                onChange={(e) => {
                  setPay(e.target.value);
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              //ADD ONCLICK
            >
              {" "}
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Container className="my-4 d-flex flex-row justify-content-around">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Loan Management App</h1>
          <Button variant="primary" onClick={handleShow1}>
            Apply
          </Button>
          <Button variant="primary" onClick={handleShow2}>
            Pay
          </Button>
        </Stack>
      </Container>

      <div className="mb-2">
        <BalanceCard />
      </div>

      <Container>
        <h2> Current Loans </h2>
      </Container>

      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <Container>
        <div className="mt-5">
          <h2> Loan History </h2>
        </div>
      </Container>

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </>
  );
}

export default Dashboard;
