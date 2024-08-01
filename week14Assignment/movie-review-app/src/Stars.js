import React, { useState } from 'react';

//defines the Stars component and recieves a rating as a prop
const Stars = ({ rating }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const handleRating = (newRating) => {
    setCurrentRating(newRating); //updates the current rating state
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => (
        <span
          key={index}
          onClick={() => handleRating(index + 1)}
          style={{ cursor: 'pointer', color: currentRating > index ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

//exports Stars as the default
export default Stars;