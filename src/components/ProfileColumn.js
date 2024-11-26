import React from "react";
import Stack from 'react-bootstrap/Stack';
import ProfileBox from "./ProfileBox";
import ProfileDescription from "./ProfileDescription";

function ProfileColumn() {
  return (
    <React.Fragment>
      <Stack gap={4}>
        <ProfileBox />
        <ProfileDescription />
      </Stack>
    </React.Fragment>
  );
}

export default ProfileColumn;