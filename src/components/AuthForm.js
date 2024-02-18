import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import React from "react";

export function AuthForm({
                           fields,
                           inputTypes, placeholders, submitText, transitionText, titleText,
                           transitionLink, transitionLinkText
                         }) {
  return (
    <section className="auth-form">
      <Link className="auth-form__logo" to="/">
        <img src={logo} alt="Лого"/>
      </Link>
      <h1 className="auth-form__title">{titleText}</h1>
      <form className="auth-form__form" onSubmit={() => {
      }} noValidate={true}>
        <ul className="auth-form__fields">
          {fields.map((field, index) => (
            <li className="auth-form__field" key={index}>
              <label className="auth-form__label">{field}</label>
              <input
                className="auth-form__input"
                type={inputTypes[index]}
                placeholder={placeholders[index]}
                onChange={() => {
                }}
                required
              />
              <span className="auth-form__input_error auth-form__input_error_visible">
                Ошибка валидации
              </span>
            </li>
          ))}
        </ul>
        <div className="auth-form_buttons-container">
          <button
            type="submit"
            className="auth-form__submit-button auth-form__submit-button_disabled"
            disabled={true}
          >
            {submitText}
          </button>
          <div className="auth-form__transition-text">
            {transitionText}{" "}
            <Link to={transitionLink} className="auth-form__transition-link">
              {transitionLinkText}
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
