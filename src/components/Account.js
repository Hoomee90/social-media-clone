import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Account(props) {
  return (
    <React.Fragment>
      <Row>
        <Col xs="auto"><Card className="p-4" style={props.profileColor}></Card></Col>

        <Col>
          <p className="mb-0"><strong>{props.userName}</strong></p>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Account;