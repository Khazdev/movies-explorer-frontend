import React from 'react';

const Preloader = ({ data, loading, error }) => {
  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="preloader__message preloader__message_error">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
      </div>
    );
  }

  if (data && data.length === 0) {
    return <div className="preloader__message">Ничего не найдено</div>;
  }

  return null;
};

export default Preloader;
