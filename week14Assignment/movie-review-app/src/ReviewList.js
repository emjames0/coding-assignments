import React from 'react';
import Review from './Review';
import './ReviewList.css';

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

export default ReviewList;