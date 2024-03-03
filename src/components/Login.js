import AuthForm from "./AuthForm";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function Login({ onLogin, isLoggedIn, isFetchLoading }) {
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate("/movies", { replace: true });
  });
  return (
    <AuthForm
      isRegister={false}
      onSubmit={onLogin}
      isFetchLoading={isFetchLoading}
    />
  );
}

export default Login;
