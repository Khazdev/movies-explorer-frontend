import AuthForm from "./AuthForm";

export function Register() {
  const fields = ["Имя", "E-mail", "Пароль"];
  const inputTypes = ["text", "email", "password"];
  const placeholders = ["Введите Имя", "Введите E-mail", "Введите пароль"];
  const submitText = "Зарегистрироваться";
  const transitionText = "Уже зарегистрированы?";
  const titleText = "Добро пожаловать!";
  const transitionLink = "/signin";
  const transitionLinkText = "Войти";

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

export default Register;
