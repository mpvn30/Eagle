import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Label = (props) => {
  return (
    <Container className="card-container">
      <Row xs="10">
        <Col>Ingredient Name</Col>
        <Col>Brand</Col>
        <Col>Packaging Amount</Col>
        <Col>Packaging</Col>
        <Col>Stock</Col>
        <Col>Threshold</Col>
        <Col>Ceiling</Col>
        <Col>Measurement</Col>
        <Col>Amount</Col>
        <Col>Status</Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Label;