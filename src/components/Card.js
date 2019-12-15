import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Cards = props => {
      return (
        <>
          {props.data.map(i => (
            <Row className="row" xs="10">
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
              <Button color="primary" size="sm" 
              onClick={() => {
      props.editRow(i)}} 
      >
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
          ))}
          </>
      )}
 


export default Cards;
