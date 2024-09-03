import "./loginTemp.css";
import React from "react"; // eslint-disable-next-line no-unused-vars

function login() {
  return (
    <React.Fragment>
      <div className="login-container">
        <h2 className="login-title"> Sign In</h2>
        <p className="login-subtitle">
          Welcome back! Please enter your details
        </p>
        <form action="">
          <div className="input-group">
            <input
              type="text"
              placeholder="Email Address"
              className="login-input"
              required
            />
            <span className="input-icon">
              <i className="uil uil-envelope"></i>
            </span>
          </div>
          <div className="input-group">
            <input
              type="passowrd"
              placeholder="Password"
              className="login-input"
              required
            />
            <span className="input-icon">
              <i className="uil uil-lock-alt"></i>
            </span>
          </div>
          <div className="login-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remmber">Remember Me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Passowrd ?
            </a>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
          <div className="divider">
            <span>Or sign in with</span>
          </div>
          <button type="button" className="google-button">
            <img
              src="/src/assets/google-icon-2048x2048-tmg5cp5v.png"
              alt="Google logo"
            />
            Continue with Google
          </button>
          <button type="button" className="apple-button">
            <img src="/src/assets/apple_2048_black.png" alt="Apple Logo" />
            Continue with Apple
          </button>
        </form>
        <p className="signup-link">
          Don't have an account <a href="@">Sign Up </a>
        </p>
      </div>
    </React.Fragment>
  );
}
export default login;
