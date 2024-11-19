import React from "react";

function Post() {
  const userName = "Neeex";
  const content = "react is very modular";
  return (
    <React.Fragment>
      <h4>{userName}</h4>
      <p>{content}</p>
      <hr />
    </React.Fragment>
  );
}

export default Post;