import React, { useState } from "react";
import { authService, firbaseInstance } from "../fbase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    // console.log(event.target.value);
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };
  const onSocialClick = async (event) => {
    // console.log(event.target.name);

    const {
      target: { name },
    } = event;
    let provider;

    if (name === "google") {
      provider = new firbaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div>
      <h1>Auth</h1>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
        <input name="password" type="password" placeholder="password" required value={password} onChange={onChange} />
        <input type="submit" value={newAccount ? "Create Account" : "Sign In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
      <button onClick={onSocialClick} name="google">
        Continue with Google
      </button>
    </div>
  );
}

export default Auth;
