import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Account(props) {
  return (
    <React.Fragment>
      <Row>
        <Col xs="auto"><Card className="account" style={props.profileColor}></Card></Col>

        <Col className="d-flex align-items-start flex-column">
          <p className="mb-0"><strong>{props.userName}</strong></p>
          <Button size="sm" className="mt-auto w-75">Button</Button>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Account;