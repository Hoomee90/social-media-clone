import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Post from "./Post";
import PostBar from "./PostBar";

function PostsColumn() {
  return (
    <React.Fragment>
      <Card>
        <PostBar />
        <ListGroup variant="flush">
          {postList.map((post, index) =>
            <ListGroup.Item key={index}><Post userName={post.userName}
              content={post.content} profileColor={post.profileColor}
              key={index} /></ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </React.Fragment>
  );
}

const postList = [
  {
    userName: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileColor: { backgroundColor: "#FEE0C2" }
  },
  {
    userName: "Lorem ipsum",
    content: "Sed ac odio a lacus feugiat condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    profileColor: { backgroundColor: "#FEE0C2" }
  },
  {
    userName: "Lorem ipsum",
    content: "Nullam ultrices eros vel pulvinar vehicula. Sed vitae laoreet diam.",
    profileColor: { backgroundColor: "#1ABC9C" }
  },
  {
    userName: "Lorem ipsum",
    content: "Maecenas condimentum, eros sed vehicula ultrices, ante dolor mollis dui, id tempor ipsum urna vitae enim. Fusce lobortis dignissim diam, eu iaculis nulla venenatis volutpat.",
    profileColor: { backgroundColor: "#9C9387" }
  },
  {
    userName: "Lorem ipsum",
    content: "Vestibulum eget lorem nunc.",
    profileColor: { backgroundColor: "#FEE0C2" }
  }
]

export default PostsColumn;