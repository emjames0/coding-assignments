import React from 'react';
import MovieList from './MovieList';
//below imports the custom styling 
import './App.css';

//below is the main App component
function App() {
  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <MovieList />
    </div>
  );
}

//below is the sample data for movies [sidenote: i attempted to put this into a separate file but it refused to import]
export const movies = [
  {
    id: 1,
    title: "Shawshank Redemption",
    image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    synopsis: "A Maine banker convicted of the murder of his wife and her lover in 1947 gradually forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    rating: 5,
    reviews: [
      { id: 1, text: "Amazing movie!" },
      { id: 2, text: "A must-watch." },
    ],
  },
  {
    id: 2,
    title: "Tremors",
    image: "https://m.media-amazon.com/images/M/MV5BMTEzNjkwMzIyMjZeQTJeQWpwZ15BbWU4MDI2NTU5ODYx._V1_.jpg",
    synopsis: "Natives of a small isolated town defend themselves against strange underground creatures which are killing them one by one.",
    rating: 5,
    reviews: [
      { id: 1, text: "Mind-blowing!" },
      { id: 2, text: "Incredible visuals." },
    ],
  },
];

//below exports the App component as the default export 
export default App;
