import logo from "../images/logo.svg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import burger from "../images/burger.svg"
import Navigation from "./Navigation";
import BurgerMenu from "./BrugerMenu";
import Account from "./Account";

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

  const isMobile = windowWidth <= 990;

  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="Лого"/>
      </Link>
      {isSignedIn ? (
        isMobile ? (
          <>
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
            {console.log("ATTENTION")}
            {console.log(isMobileMenuOpen)}
            {isMobileMenuOpen && <BurgerMenu
              isMobileMenuOpen={isMobileMenuOpen}
              handleCloseMobileMenu={handleCloseMobileMenu}
              handleOpenMobileMenu={handleOpenMobileMenu}
            ></BurgerMenu>}
          </>
          // )
        ):(
          <>
            <Navigation></Navigation>
            <div className="header__auth">
              <Account></Account>
            </div>
          </>
        )
      ):(
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
