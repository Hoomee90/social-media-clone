import React from "react";

function Post(props) {
  return (
    <React.Fragment>
      <p className="mb-0"><strong>{props.userName}</strong></p>
      <p>{props.content}</p>
    </React.Fragment>
  );
}

export default Post;