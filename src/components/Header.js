import logo from "../images/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

function Header({isSignedIn}) {
  return (
    <header className="header content">
      <Link
        className={'header__link'}
        to="/"
      >
        <img className="header__logo" src={logo} alt="Лого"/>
      </Link>

      {isSignedIn ? (
          <>
            <nav className="header__navigation">
              <ul className="header__links">
                <li>
                  <Link
                    className={`header__link header__link_type_movies`}
                    to="/"
                    onClick={console.log()}
                  >
                    Фильмы
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header__link header__link_type_movies`}
                    to="/"
                    onClick={console.log()}
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header__auth">
              <Link
                className={`header__link header__link_type_account`}
                to="/"
                onClick={console.log()}
              >
                Аккаунт
              </Link>
            </div>
          </>
        )
        :(
          <div className="header__auth">
            <Link
              className={`header__link header__link_type_registration`}
              to="/"
              onClick={console.log()}
            >
              Регистрация
            </Link>
            <Link
              className={`header__link header__link_type_login`}
              to="/"
              onClick={console.log()}
            >
              Войти
            </Link>
          </div>
        )}
    </header>
  );
}

export default Header;
