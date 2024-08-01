import React from 'react';

//defines the Review component to recieve review objects as a prop
const Review = ({ review }) => {
  return <p>{review.text}</p>;
};

//exports the Review component as the default
export default Review;