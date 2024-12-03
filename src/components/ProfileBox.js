import React from "react";
import Stack from "react-bootstrap/Stack";
import Card from 'react-bootstrap/Card';

function ProfileBox() {
  return (
    <React.Fragment>
      <Card>
        <Card.Header className="p-5 rounded-0" style={{ backgroundColor: "#3498DB" }}></Card.Header>
        <Card border="light" className="z-1 position-absolute profile-picture" style={{ backgroundColor: "#3498DB" }}></Card>
        <Card.Title className="pt-1 me-3 text-end" >Kellie A. Corrigan</Card.Title>
        <Card.Body>
          <Stack direction="horizontal" gap={4} className="m-auto">
            <a href="#">POSTS</a>
            <a href="#">FOLLOWING</a>
            <a href="#">FOLOLOWERS</a>
          </Stack>
        </Card.Body>

      </Card>
    </React.Fragment>
  );
}

export default ProfileBox;