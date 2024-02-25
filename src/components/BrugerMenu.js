import React from 'react';
import Navigation from "./Navigation";
import closeButton from "../images/xbutton.svg"

const BurgerMenu = ({isMobileMenuOpen, handleCloseMobileMenu}) => {

  const handleCloseMenu = () => {
    handleCloseMobileMenu();
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div className="overlay" onClick={handleCloseMenu}></div>
      )}
      <div className="burger-menu">
        <button className="burger-menu__close-button"
                onClick={handleCloseMobileMenu}
        >
          <img className="burger-menu__close-icon" src={closeButton} alt="кнопка меню"/>
        </button>
        <Navigation
          isMobile={true}
        ></Navigation>
      </div>
    </>
  )
}

export default BurgerMenu;
