import React from 'react';
import { Link } from 'react-router-dom';
import Account from "./Account";
import { useLocation } from "react-router";

const Navigation = ({isMobile}) => {
  const location = useLocation();
  return (
    <nav className="header__navigation">
      <ul className="header__links">
        {isMobile &&
          <li>
            <Link
              className={`header__link header__link_type_mobile ${
                location.pathname==='/' ? 'header__link_type_active':''
              }`}
              to="/"
              onClick={() => console.log('Clicked Главная')}
            >
              Главная
            </Link>
          </li>
        }
        <li>
          <Link
            className={
              `header__link
            ${isMobile
                ? 'header__link_type_mobile'
                :'header__link_type_movies'}
              ${
                location.pathname==='/movies' ? 'header__link_type_active':''
              }
              `}
            to="/movies"
            onClick={() => console.log('Clicked Фильмы')}
          >
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            className={
              `header__link
            ${isMobile
                ? 'header__link_type_mobile'
                :'header__link_type_movies'}
              ${
                location.pathname==='/saved-movies' ? 'header__link_type_active':''
              }
              `}
            to="/saved-movies"
            onClick={() => console.log('Clicked Сохранённые фильмы')}
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      {isMobile && <Account></Account>}
    </nav>
  );
};

export default Navigation;
