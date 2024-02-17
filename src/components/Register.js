import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export function Register() {

  return (
    <section className="register">
      <img className="register__logo" src={logo} alt=""/>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form"
            onSubmit={()=> {}}
            noValidate={true}>
        <ul className="register__fields">
          <li className="register__field">
            <label className="register__label">Имя</label>
            <input
              className="register__input"
              type="text"
              placeholder="Введите Имя"
              onChange={()=> {}}
              required={''}
            />
            <span className="register__input_error register__input_error_visible">Ошибка валидации</span>
          </li>
          <li className="register__field">
            <label className="register__label">E-mail</label>
            <input
              className={`register__input`}
              type="email"
              placeholder="Введите E-mail"
              onChange={()=> {}}
            />
            <span className="register__input_error register__input_error_visible">Ошибка валидации</span>
          </li>
          <li className="register__field">
            <label className="register__label">Пароль</label>
            <input
              className={`register__input`}
              type="password"
              placeholder="Введите пароль"
              onChange={()=> {}}
            />
            <span className="register__input_error register__input_error_visible">Ошибка валидации</span>
          </li>
        </ul>
        <button type="submit"
                className="register__sign-up-button register__sign-up-button_disabled"
                disabled={true}
        >
          Зарегистрироваться
        </button>
        <div className="register__to-sign-in">Уже зарегистрированы?{" "}
          <Link to="/sign-in" className="register__sign-in-button">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
