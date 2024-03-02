import Header from "./Header";
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useFormWithValidation } from "./ValidationHook";

export function Profile({onSignOut, onUpdateUser, windowWidth}) {
  const currentUser = useContext(CurrentUserContext);
  const [isEqualsInfo, setIsEqualsInfo] = useState(true);

  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

  useEffect(() => {
    if (currentUser.name===values.name
      && currentUser.email===values.email) {
      setIsEqualsInfo(true);
    } else {
      setIsEqualsInfo(false);
    }

  }, [currentUser.email, currentUser.name, values]);
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    const validatedEmail = values.email;
    const validatedName = values.name;
    onUpdateUser(validatedEmail, validatedName);
  }

  return (
    <>
      <Header
        isSignedIn={true}
        windowWidth={windowWidth}
      ></Header>
      <section className="profile">
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
          <ul className='profile__fields'>
            <li className="profile__field">
              <span className='profile__input-error'>{errors.name}</span>
              <div className='profile__input-container'>
                <label className="profile__label">Имя</label>
                <input className="profile__input"
                       type="text"
                       name='name'
                       minLength='2'
                       maxLength='40'
                       placeholder="Имя"
                       value={values.name || ""}
                       onChange={handleChange}
                       required
                /></div>
            </li>
            <li className="profile__field">
              <div className='profile__input-container'>
                <label className='profile__label'>E-mail</label>
                <input className='profile__input'
                       type="email"
                       name='email'
                       placeholder="E-mail"
                       value={values.email || ''}
                       required
                       onChange={handleChange}/>
              </div>
              <span className='profile__input-error'>{errors.email}</span>
            </li>
          </ul>
          <div className='profile__buttons-container'>
            <button
              type="submit"
              className={`profile__button profile__button_edit ${(isEqualsInfo || !isValid) && 'profile__button_edit_disabled'}`}
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_sign-out"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  )
    ;
}

export default Profile
