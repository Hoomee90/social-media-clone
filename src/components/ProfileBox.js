import React from "react";
import Card from 'react-bootstrap/Card';

function ProfileBox() {
  return (
    <React.Fragment>
      <Card>
        <Card.Header className="p-5 rounded-0" style={{ backgroundColor: "#3498DB" }}></Card.Header>
        <Card border="light" className="p-5 position-absolute bottom-50 end-50" style={{ backgroundColor: "#3498DB" }}></Card>
        <Card.Body>
          <Card.Title className="pb-2" >Placeholder</Card.Title>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default ProfileBox;