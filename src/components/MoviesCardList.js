import MoviesCard from "./MoviesCard";
import { useEffect, useState } from "react";

function convertMinutesToString(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}ч ${remainingMinutes}м`;
}

export function MoviesCardList({movies, allMoviesFlag, displayedCards, handleLoadMore, isShortMoviesActive}) {

  const [moviesToRender, setMoviesToRender] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    if (isShortMoviesActive) {
      setMoviesToRender(movies.filter((movie) => movie.duration < 40))
    } else {
      setMoviesToRender(movies)
    }
  }, [isShortMoviesActive]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <section className="movies">
      <ul className="movies__grid">
        {moviesToRender
          .slice(0, displayedCards)
          .map((movie) => (
            <MoviesCard
              key={movie.id}
              saved={movie.saved}
              movieName={movie.nameRU}
              duration={convertMinutesToString(movie.duration)}
              image={`https://api.nomoreparties.co` + movie.image.url}
              allMoviesFlag={allMoviesFlag}
            />
          ))}
      </ul>

      {windowWidth >= 1280 && displayedCards < moviesToRender.length && (
        <button className="movies__more-button" onClick={() => handleLoadMore(3 - displayedCards % 3)}>
          Ещё
        </button>
      )}
      {windowWidth >= 768 && windowWidth < 1280 && displayedCards < moviesToRender.length && (
        <button className="movies__more-button" onClick={() => handleLoadMore(2 - displayedCards % 2)}>
          Ещё
        </button>
      )}
      {windowWidth >= 320 && windowWidth < 768 && displayedCards < moviesToRender.length && (
        <button className="movies__more-button" onClick={() => handleLoadMore(2)}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
