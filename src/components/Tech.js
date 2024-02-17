import React from "react";

function Tech() {

  return (
    <section className="tech">
      <div className="content">
        <h3 className="tech__header">Технологии</h3>
        <h2 className="tech__title">7 технологий</h2>
        <p className="tech__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
          проекте.</p>
        <ul className="tech__list">
          <li className="tech__list-element">HTML</li>
          <li className="tech__list-element">CSS</li>
          <li className="tech__list-element">JS</li>
          <li className="tech__list-element">React</li>
          <li className="tech__list-element">Git</li>
          <li className="tech__list-element">Express.js</li>
          <li className="tech__list-element">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Tech;
