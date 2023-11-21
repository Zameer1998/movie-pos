import React, { useState } from 'react';
import './POS.css';

const POS = ({ movies }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleSelectMovie = (movie) => {
    setSelectedMovies([...selectedMovies, movie]);
  };

  return (
    <div className='movie-pos'>
      <h2>Movie Name List For Select Favorite</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => handleSelectMovie(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
      <h3>Selected Favorite Movies:</h3>
      <ul>
        {selectedMovies.map((selectedMovie) => (
          <li key={selectedMovie.id}>{selectedMovie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default POS;
