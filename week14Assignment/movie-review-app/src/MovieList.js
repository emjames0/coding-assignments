import React from 'react';
//imports the Movie component 
import Movie from './Movie';
//imports the movies array from App 
import { movies } from './App';

//defines the MovieList component
const MovieList = () => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

//exports the MovieList component as the default 
export default MovieList;