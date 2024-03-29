import Header from "./Header";
import React from "react";

export function Profile() {

  return (
    <>
      <Header
        isSignedIn={true}
      ></Header>
      <section className="profile">
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <ul className='profile__fields'>
            <li className="profile__field">
              <label className="profile__label">Имя</label>
              <input className="profile__input" type="" placeholder="Имя" value='Виталий'/>
            </li>
            <li className="profile__field">
              <label className='profile__label'>E-mail</label>
              <input className='profile__input' type="" placeholder="E-mail" value='asd@asd.ru'/>
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
