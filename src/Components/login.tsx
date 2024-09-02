import "./loginTemp.css";
import React from "react"; // eslint-disable-next-line no-unused-vars

function login() {
  return (
    <React.Fragment>
      <div className="login-contianer">
        <h2 className="login-title"> Sign in to your Account</h2>
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png"
              alt="Google logo"
            />
            Google
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
