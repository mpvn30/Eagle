import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Cards = props => {
  const renderTable = data => {
    const mapped = data.map(i => {
      return (
        <Row className="row1" xs="10">
          <Col>{i.name}</Col>
          <Col>{i.brand}</Col>
          <Col>{i.packagingAmount}</Col>
          <Col>{i.packaging}</Col>
          <Col>{i.stock}</Col>
          <Col>{i.threshold}</Col>
          <Col>{i.ceiling}</Col>
          <Col>{i.unit}</Col>
          <Col>{i.amount}</Col>
          <Col>{i.status}</Col>
          <Col>
            <Button color="primary" size="sm" href="/edit">
              Edit
            </Button>
          </Col>
          <Col>
            <Button
              color="secondary"
              size="sm"
              onClick={() => props.delete(i.id)}
            >
              Delete
            </Button>
          </Col>
        </Row>
      );
    });
    return mapped;
  };

  return <Container>{renderTable(props.data)}</Container>;
};

export default Cards;
