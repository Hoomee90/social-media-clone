import React from "react";

function Post(props) {
  return (
    <React.Fragment>
      <h4>{props.userName}</h4>
      <p>{props.content}</p>
      <hr />
    </React.Fragment>
  );
}

export default Post;