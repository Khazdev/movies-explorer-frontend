import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export function AuthForm({
                           isRegister,
                           onSubmit
                         }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange({target}) {
    setEmail(target.value);
  }

  function handlePasswordChange({target}) {
    setPassword(target.value);
  }

  function handleNameChange({target}) {
    setName(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    isRegister
      ? onSubmit(name, email, password)
      :onSubmit(email, password);
  }

  return (
    <section className="auth-form">
      <Link className="auth-form__logo" to="/">
        <img src={logo} alt="Лого"/>
      </Link>
      <h1 className="auth-form__title">{isRegister ? 'Добро пожаловать!':'Рады видеть!'}</h1>
      <form className="auth-form__form" onSubmit={handleSubmit} noValidate={true}>
        <ul className="auth-form__fields">
          {isRegister &&
            <li className="auth-form__field">
              <label className="auth-form__label">Имя</label>
              <input
                className="auth-form__input"
                type='text'
                placeholder="Введите Имя"
                onChange={handleNameChange}
                required
              />
              <span className="auth-form__input_error">
                Ошибка валидации
              </span>
            </li>
          }
          <li className="auth-form__field">
            <label className="auth-form__label">E-mail</label>
            <input
              className="auth-form__input"
              type='email'
              placeholder="Введите E-mail"
              onChange={handleEmailChange}
              required
            />
            <span className="auth-form__input_error">
                Ошибка валидации
              </span>
          </li>
          <li className="auth-form__field">
            <label className="auth-form__label">Пароль</label>
            <input
              className="auth-form__input"
              type='password'
              placeholder="Введите пароль"
              onChange={handlePasswordChange}
              required
            />
            <span className="auth-form__input_error auth-form__input_error_visible">
                Ошибка валидации
              </span>
          </li>
        </ul>
        <div className="auth-form__buttons-container">
          <button
            type="submit"
            className="auth-form__submit-button" //auth-form__submit-button_disabled"
            // onSubmit={handleSubmit}
          >
            {isRegister ? 'Зарегистрироваться':'Войти'}
          </button>
          <div className="auth-form__transition-text">
            {isRegister ? 'Уже зарегистрированы?':'Ещё не зарегистрированы?'}{" "}
            <Link to={isRegister ? '/signin':'/signup'} className="auth-form__transition-link">
              {isRegister ? 'Войти':'Регистрация'}
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
