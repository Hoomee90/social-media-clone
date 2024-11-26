import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Post(props) {
  return (
    <React.Fragment>
      <Row>
        <Col xs="auto"><Card className="p-4" style={props.profileColor}></Card></Col>

        <Col>
          <p className="mb-0"><strong>{props.userName}</strong></p>
          <p>{props.content}</p>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Post;