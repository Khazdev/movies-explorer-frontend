import AuthForm from "./AuthForm";

export function Login() {
  const fields = ["E-mail", "Пароль"];
  const inputTypes = ["email", "password"];
  const placeholders = ["Введите E-mail", "Введите пароль"];
  const submitText = "Войти";
  const transitionText = "Ещё не зарегистрированы?";
  const titleText = "Рады видеть!";
  const transitionLink = "/signup";
  const transitionLinkText = "Регистрация";

  return (
    <AuthForm
      fields={fields}
      inputTypes={inputTypes}
      placeholders={placeholders}
      submitText={submitText}
      transitionText={transitionText}
      titleText={titleText}
      transitionLink={transitionLink}
      transitionLinkText={transitionLinkText}
    />
  );
}

export default Login;
