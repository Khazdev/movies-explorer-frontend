import React from "react";

function About() {

  return (
    <section className="about">
      <h3 className="about__header">О проекте</h3>
      <div className="about__grid-container about__grid-container_description">
        <h4 className="about__description-title">Дипломный проект включал 5 этапов</h4>
        <h4 className="about__description-title">На выполнение диплома ушло 5 недель</h4>
        <p className="about__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        <p className="about__description">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about__grid-container about__grid-container_weeks">
        <h4 className="about__week-count about__week-count_green">1 неделя</h4>
        <h4 className="about__week-count about__week-count_gray">4 недели</h4>
        <p className="about__technology">Back-end</p>
        <p className="about__technology">Front-end</p>
      </div>
    </section>
  );
}

export default About;
