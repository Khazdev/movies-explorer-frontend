import logo from "../images/logo.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  burger  from "../images/burger.svg"

function Header({isSignedIn}) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="Лого" />
      </Link>
      {console.log(isMobile)}
      {isSignedIn ? (
        isMobile ? (
          <button
            className="header__burger-menu"
            type="button"
            aria-label="Открыть меню"
            onClick={handleOpenMobileMenu}
          >
            <img
              className="header__burger-icon"
              src={burger}
              alt="кнопка меню"
            ></img>
          </button>
        ):(
          <>
            <nav className="header__navigation">
              <ul className="header__links">
                <li>
                  <Link
                    className="header__link header__link_type_movies"
                    to="/"
                    onClick={console.log()}
                  >
                    Фильмы
                  </Link>
                </li>
                <li>
                  <Link
                    className="header__link header__link_type_movies"
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
                className="header__link header__link_type_account"
                to="/"
                onClick={console.log()}
              >
                Аккаунт
              </Link>
            </div>
          </>
        )
      ) : (
        <div className="header__auth">
          <Link
            className="header__link header__link_type_registration"
            to="/"
            onClick={console.log()}
          >
            Регистрация
          </Link>
          <Link
            className="header__link header__link_type_login"
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
