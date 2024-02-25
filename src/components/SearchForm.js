export function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__input-container">
          <input className="search__input" type="search" placeholder="Фильм" required/>
          <button className="search__button" type="submit"></button>
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

export default SearchForm
