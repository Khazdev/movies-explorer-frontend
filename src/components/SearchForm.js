import React, { useEffect, useState } from 'react';

export function SearchForm({onSearch, onFilterShortMovies}) {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [isToggleChecked, setIsToggleChecked] = useState(JSON.parse(localStorage.getItem("shortFilmToggle")));

  useEffect(() => {
    const searchQuery = localStorage.getItem("searchQuery");
    if (searchQuery) {
      setSearchText(searchQuery);
    }
  }, []);

  useEffect(() => {
    const shortFilmToggle = JSON.parse(localStorage.getItem("shortFilmToggle"));
    setIsToggleChecked(shortFilmToggle);
  }, []);

  const handleIsToggleChecked = (checked) => {
    setIsToggleChecked(checked);
    onFilterShortMovies(checked)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchText.trim()==='') {
      setError('Нужно ввести ключевое слово');
    } else {
      setError('');
      onSearch(searchText);
    }
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate={true}>
        <div className="search__input-container">
          <input
            className="search__input"
            type="search"
            placeholder="Фильм"
            required
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button className="search__button" type="submit"></button>
          <span
            className={`search__input-error ${error && 'search__input-error_visible'}`}
          >
                {error}
              </span>
        </div>
        <label className="search__toggle">
          <input className="search__toggle-checkbox"
                 type="checkbox"
                 checked={isToggleChecked}
                 onChange={(event) => handleIsToggleChecked(event.target.checked)}
          />
          <div className="search__toggle-switch"></div>
          <span className="search__toggle-label">Короткометражки</span>
        </label>
      </form>

    </section>
  );
}

export default SearchForm;
