import React from "react";
import { Container } from "react-bootstrap";
import CustomCard from '../widgets/CustomCard.js'

function Dashboard() {
  return (
    <Container className="my-4 d-flex flex-row justify-content-around">
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
    </Container>
    
  );
}

export default Dashboard;
