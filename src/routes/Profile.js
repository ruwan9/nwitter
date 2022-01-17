import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

function Profile() {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  );
}

export default Profile;
