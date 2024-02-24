const russianRegex = /[а-яА-ЯЁё]/;
const englishRegex = /[a-zA-Z]/;
export const filterMoviesBySearchText = (searchText, movies) => {
  return movies.filter((movie) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    if (russianRegex.test(searchText)) {
      return movie.nameRU.toLowerCase().includes(lowerCaseSearchText);
    } else if (englishRegex.test(searchText)) {
      return movie.nameEN.toLowerCase().includes(lowerCaseSearchText);
    } else if (!isNaN(searchText)) {
      return (
        movie.nameRU.toLowerCase().includes(lowerCaseSearchText) ||
        movie.nameEN.toLowerCase().includes(lowerCaseSearchText)
      );
    } else {
      return false;
    }
  });
};
