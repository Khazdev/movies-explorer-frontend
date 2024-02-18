import React, { useEffect, useState } from 'react';
import Navigation from "./Navigation";
import closeButton from "../images/xbutton.svg"

const BurgerMenu = ({isMobileMenuOpen, handleCloseMobileMenu, handleOpenMobileMenu}) => {
  const [isClosing, setIsClosing] = useState(false);

  // const location = useLocation();
  // const isHomePage = location.pathname==='/';

  const handleOpenMenu = () => {
    handleOpenMobileMenu();
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    handleCloseMobileMenu();
  };

  const onAnimationEnd = () => {
    setIsClosing(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsClosing(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {isMobileMenuOpen && (
        <div className="overlay" onClick={handleCloseMenu}></div>
      )}
      <div className="burger-menu">
        <button className="burger-menu__close-button"
                onClick={handleCloseMobileMenu}
        >
          <img className="burger-menu__close-icon" src={closeButton} alt=""/>
        </button>
        <Navigation
          isMobile={true}
        ></Navigation>
      </div>
    </>
  )
}

export default BurgerMenu;
