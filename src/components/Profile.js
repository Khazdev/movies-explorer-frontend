import Header from "./Header";
import React, { useState } from "react";

export function Profile({onSignOut, currentUser, onUpdateUser}) {

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  React.useEffect(() => {

    setName(currentUser.name || "");
    setEmail(currentUser.email || "");
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(email, name);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Header
        isSignedIn={true}
      ></Header>
      <section className="profile">
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
          <ul className='profile__fields'>
            <li className="profile__field">
              <label className="profile__label">Имя</label>
              <input className="profile__input" type="" placeholder="Имя" value={name} onChange={handleNameChange}/>
            </li>
            <li className="profile__field">
              <label className='profile__label'>E-mail</label>
              <input className='profile__input' type="" placeholder="E-mail" value={email}
                     onChange={handleEmailChange}/>
            </li>
          </ul>
          <div className='profile__buttons-container'>
            <button
              type="submit"
              className="profile__button profile__button_edit"
              // disabled
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_sign-out"
              // disabled
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile
