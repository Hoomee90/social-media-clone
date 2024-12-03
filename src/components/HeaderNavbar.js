import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function HeaderNavbar() {
  return (
    <React.Fragment>
      <Navbar className="border pb-3">
        <Container fluid>
          <Navbar.Collapse>
            <ButtonGroup className="me-auto">
              <Button href="#" variant="outline-secondary">Home</Button>
              <Button href="#" variant="outline-secondary">Notifications</Button>
              <Button href="#" variant="outline-secondary">Messages</Button>
            </ButtonGroup>
          </Navbar.Collapse>
          <Form inline="true">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="border-primary rounded-5"
                />
              </Col>
              <Col xs="auto">
                <Button variant="outline-primary" className="rounded-5 px-3">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </React.Fragment >
  );
}

export default HeaderNavbar;