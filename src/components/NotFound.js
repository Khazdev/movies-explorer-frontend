import React from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <span className="not-found__text">Страница не найдена</span>
      <button className="not-found__back-button" onClick={handleGoBack}>Назад</button>
    </section>
  );
}

export default NotFound;
