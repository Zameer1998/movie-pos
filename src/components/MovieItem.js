import React, { useState, useEffect } from 'react';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === movie.imagePaths.length - 1 ? 0 : prevIndex + 1
      );
    };

    const timer = setInterval(changeImage, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [movie.imagePaths]);

  return (
    <div className="movie-item">
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-price">Price: ${movie.price}</p>
      <img
        src={movie.imagePaths[currentImageIndex]}
        alt={`Poster for ${movie.title}`}
        className="movie-image"
      />
    </div>
  );
};

export default MovieItem;
