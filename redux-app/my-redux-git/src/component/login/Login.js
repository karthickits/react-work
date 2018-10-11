import React from "react";

class Login extends React.Component {
  render() {
    return (
      <section class="content">
        <h1>Login</h1>
        <form action="">
          <div class="form-input">
            <label>Username:</label>
            <input type="text" />
          </div>

          <div class="form-input">
            <label>Password:</label>
            <input type="password" />
          </div>

          <div class="form-input">
            <input type="button" value="Login" />
            <input type="button" value="Reset" />
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
