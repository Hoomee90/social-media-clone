import React from "react";
import Card from 'react-bootstrap/Card';

function ProfileBox() {
  return (
    <React.Fragment>
      <Card>
        <Card.Header className="p-5 rounded-0" style={{ backgroundColor: "#3498DB" }}></Card.Header>
        <Card border="light" className="z-1 position-absolute profile-picture" style={{ backgroundColor: "#3498DB" }}></Card>
        <Card.Title className="py-1 me-3 text-end" >Placeholder</Card.Title>
      </Card>
    </React.Fragment>
  );
}

export default ProfileBox;