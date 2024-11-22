import React from "react";
import Badge from "react-bootstrap/Badge";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function PostBar() {
  return (
    <React.Fragment>
      <Stack direction="horizontal" gap={3}>
        <Badge bg="danger" className="p-3 ms-3"> </Badge>
        <Form.Control
          placeholder="What's happening?"
        />
      </Stack>
    </React.Fragment>
  )
}

export default PostBar;