import MoviesCard from "./MoviesCard";
import { movies } from "../constants/movies"


export function MoviesCardList({allMoviesFlag}) {
  return (
    <section className="movies">
      <ul className="movies__grid">
        {movies.map((movie) => (
          <MoviesCard
            saved={movie.saved}
            movieName={movie.movieName}
            duration={movie.duration}
            image={movie.imageUrl}
            allMoviesFlag={allMoviesFlag}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList
