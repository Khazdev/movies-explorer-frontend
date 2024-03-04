import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const handleAboutLinkClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleTechnologyLinkClick = () => {
    const aboutSection = document.getElementById("tech");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutMeLinkClick = () => {
    const aboutSection = document.getElementById("about-me");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero">
      <div className="hero__background">
        <h1 className="hero__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className="hero__links">
          <li>
            <Link className="hero__link" to="/" onClick={handleAboutLinkClick}>
              О проекте
            </Link>
          </li>
          <li>
            <Link
              className="hero__link"
              to="#"
              onClick={handleTechnologyLinkClick}
            >
              Технологии
            </Link>
          </li>
          <li>
            <Link
              className="hero__link"
              to="#"
              onClick={handleAboutMeLinkClick}
            >
              Студент
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
