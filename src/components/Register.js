import AuthForm from "./AuthForm";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function Register({ onRegister, isLoggedIn, isFetchLoading }) {
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate("/movies", { replace: true });
  });
  return (
    <AuthForm
      isRegister={true}
      onSubmit={onRegister}
      isFetchLoading={isFetchLoading}
    />
  );
}

export default Register;
