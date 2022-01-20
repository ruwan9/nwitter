import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, dbService } from "../fbase";

function Profile({ refreshUser, userObj }) {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const getMyNweets = async () => {
    const nweets = await dbService.collection("nweets").where("creatorId", "==", userObj.uid).orderBy("createdAt").get();
    console.log(nweets.docs.map((doc) => doc.data()));
  };
  const onChange = (event) => {
    setNewDisplayName(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
      refreshUser();
    }
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={newDisplayName} />
        <input type="submit" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  );
}

export default Profile;
