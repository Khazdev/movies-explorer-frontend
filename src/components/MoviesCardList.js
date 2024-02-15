import MoviesCard from "./MoviesCard";

export function MoviesCardList() {
  return (
    <section className="movies content">
      <ul className="movies__grid">
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </ul>
    </section>
  );
}

export default MoviesCardList
