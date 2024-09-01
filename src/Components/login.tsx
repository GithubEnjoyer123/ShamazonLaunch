import "./loginTemp.css";
function login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action="">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
export default login;
