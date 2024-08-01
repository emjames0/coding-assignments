import React, { useState } from 'react';

const Stars = ({ rating }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const handleRating = (newRating) => {
    setCurrentRating(newRating);
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

export default Stars;