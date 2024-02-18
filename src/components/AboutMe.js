import React from "react";
import { Link } from "react-router-dom";
import photo from "../images/about-me.png";

function AboutMe() {

  return (
    <section id="about-me" className="about-me">
      <h3 className="about-me__header">Студент</h3>
      <div className="about-me__grid">
        <div className="about-me__content">
          <h2 className="about-me__title">Виталий</h2>
          <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики
            СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
            работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал
            заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
          <Link className="about-me__link"
                to="https://github.com/Khazdev"
                target="_blank"
          >Github
          </Link>
        </div>
        <img className="about-me__photo" src={photo} alt="Фотография студента"/>
      </div>
    </section>
  );
}

export default AboutMe;
