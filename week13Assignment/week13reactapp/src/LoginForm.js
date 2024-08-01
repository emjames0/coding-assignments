//below is the import for react to use its features
import React from "react";
//below is the import of the login form's CSS file to apply the styling
import './LoginForm.css'; 

//below defines the login form component using an arrow function
const LoginForm = () => {
    return (
//below is the actual form itself
      <div className="login-form">
        <h3>Log In</h3>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  };
  
  //below exports the Loginform which allows the component to be used in other parts of the application
  export default LoginForm;