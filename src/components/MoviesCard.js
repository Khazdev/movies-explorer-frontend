export function MoviesCard({saved, duration, movieName, image, allMoviesFlag}) {

  return (
    <li className="movie-card">
      <img className='movie-card__photo'
           src={image}></img>
      <div className="movie__info-container">
        <span className="movie-card__description">{movieName}</span>
        <span className="movie-card__duration">{duration}</span>
      </div>
      {allMoviesFlag ?
        <button
          className={`movie-card__save-button movie-card__save-button_state_${
            saved ? "saved":"not-saved"
          }`}
          aria-label="Сохранить">
          {!saved && 'Сохранить'}
        </button>
      :
        <button
          className={`movie-card__del-button`}
          aria-label="Удалить фильм">
        </button>
      }

    </li>
  );
}

export default MoviesCard
