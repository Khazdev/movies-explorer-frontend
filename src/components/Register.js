import AuthForm from "./AuthForm";

export function Register({onRegister}) {

  return (
    <AuthForm
      isRegister={true}
      onSubmit={onRegister}
    />
  );
}

export default Register;
