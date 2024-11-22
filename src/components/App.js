import React from "react";
import PostsColumn from "./PostsColumn";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <React.Fragment>
      <Row>
        <Col></Col>
        <Col><PostsColumn /></Col>
        <Col></Col>
      </Row>
    </React.Fragment>
  );
}

export default App;