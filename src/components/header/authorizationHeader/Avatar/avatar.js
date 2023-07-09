import React from 'react';
import {useNavigate} from 'react-router-dom';
import avatar from "../../../shared/icons/Header/Avatar.svg"
import css from "./avatar.module.scss";
import { signOut } from '../../../../store/slices/profile';
import { useDispatch } from 'react-redux';

function ExitButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function handleClick() {
    navigate("/login");
    dispatch(signOut());
  }
  return (
    <button 
      className={css.button} 
      type="button" 
      onClick={handleClick}
      >
      Выйти
    </button>
  );
}
export const Avatar = () => {
  return (
    <div className={css.avatar}>
      <div className={css.wrapper}>
        <span>Алексей А.</span>
        <ExitButton />
      </div>
      <div >
        <img 
          className={css.avatarImg} 
          src={avatar} 
          alt='avatar'
        />
      </div>
    </div>
  )
}

