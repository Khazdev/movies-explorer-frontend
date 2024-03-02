import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <Link className="header__link header__link_type_account" to="/profile">
      Аккаунт
    </Link>
  );
};

export default Account;
