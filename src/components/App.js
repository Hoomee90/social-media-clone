import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PostsColumn from "./PostsColumn";
import AccountsColumn from "./AccountsColumn";
import ProfileColumn from "./ProfileColumn";

function App() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col><ProfileColumn /></Col>
          <Col xs={5}><PostsColumn /></Col>
          <Col><AccountsColumn /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;