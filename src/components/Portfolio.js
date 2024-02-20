import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {

  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link className="portfolio__link"
                to="https://github.com/Khazdev/how-to-learn"
                target="_blank"
                rel="noopener noreferrer"
          >Статичный сайт</Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link"
                to="https://khazdev.github.io/russian-travel/"
                target="_blank"
                rel="noopener noreferrer"
          >Адаптивный сайт</Link>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link"
                to="https://mesto.khazanov.nomoredomainsmonster.ru/sign-in"
                target="_blank"
                rel="noopener noreferrer"
          >Одностраничное приложение</Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
