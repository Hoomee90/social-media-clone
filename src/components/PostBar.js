import React from "react";
import Badge from "react-bootstrap/Badge";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function PostBar() {
  return (
    <React.Fragment>
      <Stack direction="horizontal" gap={3} className="p-3" style={{ backgroundColor: "#A8D8F0" }}>
        <Badge bg="none" className="p-3 ms-3" style={{ backgroundColor: "#73070A" }}> </Badge>
        <Form.Control
          placeholder="What's happening?"
          className="border-primary rounded-0"
        />
      </Stack>
    </React.Fragment>
  )
}

export default PostBar;