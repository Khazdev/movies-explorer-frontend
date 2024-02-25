import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function MoviesCard({movie, allMoviesFlag, onSaveMovie, onDeleteMovie, movieId, isLiked}) {
  const {nameRU, duration, image} = movie;
  const imageUrl = allMoviesFlag ? `https://api.nomoreparties.co` + image.url : movie.thumbnail;
  const [isSaved, setIsSaved] = useState(isLiked);
  const convertMinutesToString = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м`;
  };

  useEffect(() => {

  }, [isSaved]);

  function deleteMovie() {
    if (movieId) {
      onDeleteMovie(movieId)
      setIsSaved(false);
    }
  }

  function saveMovie() {
    const {
      country,
      director,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
      id: movieId,
    } = movie;
    const thumbnail = `https://api.nomoreparties.co` + image.formats.thumbnail.url;
    onSaveMovie({
      country,
      director,
      duration,
      year,
      description,
      image: imageUrl,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      movieId,
    });
    setIsSaved(true);
  }

  const handleSaveMovie = () => {
    if (isSaved) {
      deleteMovie()
    } else {
      saveMovie();
    }
  };

  return (
    <li className="movie-card">
      <Link to={movie.trailerLink}
            target="_blank"
            rel="noopener noreferrer"
      >
      <img className="movie-card__photo" src={imageUrl} alt="превью изображение фильма"/>
      <div className="movie-card__info-container">
        <span className="movie-card__description">{nameRU}</span>
        <span className="movie-card__duration">{convertMinutesToString(duration)}</span>
      </div>
      </Link>
      {allMoviesFlag ? (
        <button
          className={`movie-card__save-button movie-card__save-button_state_${
            isSaved ? 'saved':'not-saved'
          }`}
          aria-label="Сохранить"
          onClick={handleSaveMovie}
        >
          {!isSaved && 'Сохранить'}
        </button>
      ):(
        <button className="movie-card__del-button" aria-label="Удалить фильм" onClick={deleteMovie}></button>
      )}

    </li>
  );
}

export default MoviesCard;
