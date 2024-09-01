import "./loginTemp.css";
import React from "react"; // eslint-disable-next-line no-unused-vars

function login() {
  return (
    <React.Fragment>
      <div className="login-container">
        <h2>Login</h2>
        <form action="">
          <input type="text" placeholder="Username" className="login-input" />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default login;
