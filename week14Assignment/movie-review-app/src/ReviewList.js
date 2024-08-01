import React from 'react';

//imports Review from Review
import Review from './Review';
//imports custom ReviewList styling
import './ReviewList.css';

//defines the ReviewList and recieves an array of reviews as a prop
const ReviewList = ({ reviews }) => {
  return (
    <div className="ReviewList">
      {reviews.map((review, index) => (
        <div key={review.id} className="review">
          <strong>Review {index + 1}:</strong> {review.text}
        </div>
      ))}
    </div>
  );
};

//exports ReviewList as the default
export default ReviewList;