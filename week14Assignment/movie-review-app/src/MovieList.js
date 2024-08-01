import React from 'react';
import Movie from './Movie';
import { movies } from './App';

const MovieList = () => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;