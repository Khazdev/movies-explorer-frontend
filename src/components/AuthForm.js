import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export function AuthForm({ fields,
                           inputTypes, placeholders, submitText, transitionText, titleText,
                           transitionLink, transitionLinkText}) {
  return (
    <section className="auth-form">
      <img className="auth-form__logo" src={logo} alt="" />
      <h1 className="auth-form__title">{titleText}</h1>
      <form className="auth-form__form" onSubmit={() => {}} noValidate={true}>
        <ul className="auth-form__fields">
          {fields.map((field, index) => (
            <li className="auth-form__field" key={index}>
              <label className="auth-form__label">{field}</label>
              <input
                className="auth-form__input"
                type={inputTypes[index]}
                placeholder={placeholders[index]}
                onChange={() => {}}
                required
              />
              <span className="auth-form__input_error auth-form__input_error_visible">
                Ошибка валидации
              </span>
            </li>
          ))}
        </ul>
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
      </form>
    </section>
  );
}

export default AuthForm;
