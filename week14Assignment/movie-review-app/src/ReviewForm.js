import React, { useState } from 'react';

//defines the ReviewForm component and recieves addReview function as a prop
const ReviewForm = ({ addReview }) => {
  const [reviewText, setReviewText] = useState('');

//below is the function to handle a form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === '') return; // Prevent adding empty reviews
    addReview({ id: Date.now(), text: reviewText });
    setReviewText(''); // Clear the input field after submitting
  };


  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here..."
        rows="4"
        cols="50"
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

//exports the ReviewForm as the default
export default ReviewForm;