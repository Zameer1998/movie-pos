import React, { useState } from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleMovies = movies.slice(startIndex, startIndex + 8);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 8);
  };

  const handleBackClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 8));
  };

  return (
    <div>
      {visibleMovies.map((movie) => (
        <MovieItem key={movie.title} movie={movie} />
      ))}
      {startIndex + 8 < movies.length && (
        <button onClick={handleNextClick}>Next</button>
      )}
      {startIndex > 0 && (
        <button onClick={handleBackClick}>Back</button>
      )}
    </div>
  );
};

export default MovieList;
