import React from "react";
import { Link } from "react-router-dom";

function Hero() {

  return (
    <section className="hero">
      <div className="hero__background">
        <h1 className="hero__title">
          Учебный проект студента факультета Веб-разработки.</h1>
        <ul className="hero__links">
          <li>
            <Link className="hero__link" to="#">О проекте</Link>
          </li>
          <li>
            <Link className="hero__link" to="#">Технологии</Link>
          </li>
          <li>
            <Link className="hero__link" to="#">Студент</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
