import React, { useState, useEffect} from 'react';
import css from "./form.module.scss";
import Google from "../../shared/icons/Form/Google.svg";
import Facebook from "../../shared/icons/Form/facebook.svg";
import Yandex from "../../shared/icons/Form/Yandex.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { dropStatus, signIn } from "../../../store/slices/profile";  


export const Form = () => {
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signInStatus = useSelector(state => state.profile.status)
    const visibility = error ? 'visible' : 'hidden'
    const correctInputs = !( login && password )
    
    
    useEffect(()=>{
        if(signInStatus === 'done'){
          navigate("/");
          dispatch(dropStatus())
        }
        if(signInStatus === 'error'){
          setError(true);
        }
      },[error , signInStatus, navigate, dispatch])
      const  handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signIn({
          login,
          password
        }))
           
    }
    
    
    
    return (
    <div className={css.formWrapper}>
        <div className={css.linkBox}>
            <a className={css.link1} href='...' >Войти</a>
            <a className={css.link2} href='...'>Зарегистрироваться</a>
        </div>

        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label} htmlFor='login'>Логин или номер телефона:</label>
            <input className={css.formInput} onChange = {(e) => setLogin(e.target.value)}
                type='text' 
                id='login'
                login={login} 
            />
            <label className={css.label}  htmlFor='password'>Пароль:</label>
            <input className={css.formInput} onChange = {(e) => setPassword(e.target.value)}
                type='password'
                id='password'
                password={password} 
            />
            <span className={css.error}style={{visibility}}>Неправильный пароль</span>
            <button
                type='submit' 
                className={css.button} 
                onClick={handleSubmit} 
                disabled={correctInputs}
                style={correctInputs ? {opacity:`${'50%'}`} : {opacity:`${'100%'}`}}>Войти
            </button>
        </form>
        
        <a className={css.recoverPassword}href="...">Восстановить пароль</a>
        <div className={css.iconsFooter}>
            <p className={css.label1}>Войти через:</p>
            <img className={css.icon} src={Google} alt="Google" />
            <img className={css.icons}  src={Facebook} alt="Facebook" />
            <img className={css.icons}  src={Yandex} alt="Yandex" />
        </div>
    </div>
    )
}