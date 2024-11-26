import React from "react";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Account from "./Account";

function AccountsColumn() {
  return (
    <React.Fragment>
      <Card body>
        <Card.Title className="mb-4">Lorem ipsum</Card.Title>
        <Stack gap={3}>
          {accountList.map((post, index) =>
            <Account userName={post.userName}
              content={post.content} profileColor={post.profileColor}
              key={index} />
          )}
        </Stack>
      </Card>
    </React.Fragment>
  );
}

const accountList = [
  {
    userName: "User 1",
    profileColor: { backgroundColor: "#FEE0C2" }
  },
  {
    userName: "User 2",
    profileColor: { backgroundColor: "#C6DF9C" }
  },
  {
    userName: "User 3",
    profileColor: { backgroundColor: "#7BCDC9" }
  },
]

export default AccountsColumn;