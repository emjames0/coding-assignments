//below is the import for react to use its features
import React from 'react';
//below is the import of the app's CSS file 
import './App.css';
//below imports the navigation component
import Navigation from './Navigation';
//below imports the login form
import LoginForm from './LoginForm';

//below is the root component of the overall application, containing the navigation and the loginform 
//additional components to the app would be linked/listed here 
function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}

//below allows the app component to be used as the main component in the application 
export default App;