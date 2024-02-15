import photo from "../images/movie-pic.png";
export function MoviesCard() {

  return (
    <li className="movie-card">
      <img className='movie-card__photo'
           src={photo}></img>
      <div className="movie__info-container">
        <span className="movie-card__description">33 слова о дизайне</span>
        <span className="movie-card__duration">1ч 17м</span>
      </div>

      <button className="movie-card__save-button movie-card__save-button_state_saved"
              aria-label="Сохранить">
      </button>
    </li>
  );
}

export default MoviesCard
