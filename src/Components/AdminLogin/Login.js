import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function login(e) {
    if (e) e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { username, password }); // <- axios.post to log the user in, response is req.session.user from the server, storing it in variable called user.
      if (res.data.id) {
        props.loginUser(res.data); // <- is calling the function loginUser on userReducer.js
        props.history.push("/AdminCtrl"); // .this will end the function kind of like a return statement
      }
    } catch (e) {
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div className="login">
      <input
        type="text"
        className="username-input"
        placeholder="Name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="password-input"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-btn" type="submit" onClick={login}>
        login
      </button>
    </div>
  );
};

export default withRouter(Login);
