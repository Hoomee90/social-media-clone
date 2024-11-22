import React from "react";
import Post from "./Post";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PostBar from "./PostBar";

function PostsColumn() {
  return (
    <React.Fragment>
      <Card>
        <Card.Header bg="primary"><PostBar /></Card.Header>
        <ListGroup variant="flush">
          {postList.map((post, index) =>
            <ListGroup.Item key={index}><Post userName={post.userName}
              content={post.content}
              key={index} /></ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </React.Fragment>
  );
}

const postList = [
  {
    userName: "User 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    userName: "User 2",
    content: "Sed ac odio a lacus feugiat condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    userName: "User 3",
    content: "Nullam ultrices eros vel pulvinar vehicula. Sed vitae laoreet diam."
  },
  {
    userName: "User 4",
    content: "Maecenas condimentum, eros sed vehicula ultrices, ante dolor mollis dui, id tempor ipsum urna vitae enim. Fusce lobortis dignissim diam, eu iaculis nulla venenatis volutpat."
  },
  {
    userName: "User 5",
    content: "Vestibulum eget lorem nunc."
  }
]

export default PostsColumn;