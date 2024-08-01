import React, { useState } from 'react';
//importing the Stars component
import Stars from './Stars';
//importing the ReviewList component 
import ReviewList from './ReviewList';
//importing the ReviewForm component 
import ReviewForm from './ReviewForm';

//defining the Movie component and recieving a movie object as a prop
const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);

  //function to add a new review 
  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  //renders the movie details, stars, review list and review form 
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <p>{movie.synopsis}</p>
      <Stars rating={movie.rating} />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
};

//exports the Movie component as the default 
export default Movie;