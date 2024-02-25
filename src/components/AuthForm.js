import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import React from "react";
import { useFormWithValidation } from "./ValidationHook";

const EMAIL_REGEX =
  "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";

export function AuthForm({
                           isRegister,
                           onSubmit
                         }) {
  const {values, handleChange, errors, isValid} = useFormWithValidation();


  function handleSubmit(e) {
    e.preventDefault();
    isRegister
      ? onSubmit({name: values.name, email: values.email, password: values.password})
      :onSubmit({email: values.email, password: values.password});
  }

  return (
    <section className="auth-form">
      <Link className="auth-form__logo" to="/">
        <img src={logo} alt="Лого"/>
      </Link>
      <h1 className="auth-form__title">{isRegister ? 'Добро пожаловать!':'Рады видеть!'}</h1>
      <form className="auth-form__form"
            onSubmit={handleSubmit}
            noValidate={true}
      >
        <ul className="auth-form__fields">
          {isRegister &&
            <li className="auth-form__field">
              <label className="auth-form__label">Имя</label>
              <input
                className="auth-form__input"
                type='text'
                name='name'
                placeholder="Введите Имя"
                onChange={handleChange}
                value={values.name || ""}
                minLength="2"
                maxLength="40"
                required
              />
              <span
                className={`auth-form__input_error ${errors.name && 'auth-form__input_error_visible'}`}
                >
                {errors.name}
              </span>
            </li>
          }
          <li className="auth-form__field">
            <label className="auth-form__label">E-mail</label>
            <input
              className="auth-form__input"
              type="email"
              name="email"
              placeholder="Введите E-mail"
              onChange={handleChange}
              pattern={EMAIL_REGEX}
              value={values.email || ""}
              required
            />
            <span
              className={`auth-form__input_error ${errors.email && 'auth-form__input_error_visible'}`}>                {errors.email}
              </span>
          </li>
          <li className="auth-form__field">
            <label className="auth-form__label">Пароль</label>
            <input
              className="auth-form__input"
              type='password'
              name='password'
              placeholder="Введите пароль"
              onChange={handleChange}
              value={values.password  || ""}
              required
            />
            <span className={`auth-form__input_error ${errors.password && 'auth-form__input_error_visible'}`}>
                {errors.password}
              </span>
          </li>
        </ul>
        <div className="auth-form__buttons-container">
          <button
            type="submit"
            className={`auth-form__submit-button ${!isValid && 'auth-form__submit-button_disabled'}`}  //auth-form__submit-button_disabled"
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
