import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__header">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2024</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <Link
              className="footer__link"
              to="https://practicum.yandex.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__list-item">
            <Link
              className="footer__link"
              to="https://github.com/Khazdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
