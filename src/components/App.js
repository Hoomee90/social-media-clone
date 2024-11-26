import React from "react";
import PostsColumn from "./PostsColumn";
import AccountsColumn from "./AccountsColumn";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col><PostsColumn /></Col>
          <Col><AccountsColumn /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;