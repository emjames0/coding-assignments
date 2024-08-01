//below is the import for react to use its features
import React from 'react';
//below is the import of the navigation's CSS file to apply the styling
import './Navigation.css'; 

//below is the creation of the navigation component using an arrow function
const Navigation = () => {
  return (
//below is the nav links
    <nav className="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

//below exports the navigation, which allows the component to be used in other parts of the application
export default Navigation;