import React from 'react';
import MovieList from './components/MovieList';
import POS from './components/POS';
import moviesData from './components/movies.json';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <MovieList movies={moviesData} />
      <br/>
      <POS movies={moviesData} />
    </div>
  );
}

export default App;
