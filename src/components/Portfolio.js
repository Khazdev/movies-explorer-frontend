import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {

  return (
    <section className="portfolio content">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link className="portfolio__link">Статичный сайт</Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link">Адаптивный сайт</Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link">Одностраничное приложение</Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
