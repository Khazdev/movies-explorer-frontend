import AuthForm from "./AuthForm";

export function Login({onLogin}) {

  return (
    <AuthForm
      isRegister={false}
      onSubmit={onLogin}
    />
  );
}

export default Login;
