import React, { useState } from 'react';

export function SearchForm({onSearch}) {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchText.trim()==='') {
      setError('Нужно ввести ключевое слово');
    } else {
      setError('');
      console.log("sadasd")
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
          <input className="search__toggle-checkbox" type="checkbox"/>
          <div className="search__toggle-switch"></div>
          <span className="search__toggle-label">Короткометражки</span>
        </label>
      </form>

    </section>
  );
}

export default SearchForm;
