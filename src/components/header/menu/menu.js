import React from "react";
import css from "./menu.module.scss";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoNav from "../../shared/icons/logoNav.svg";

function Button () {
    const navigate = useNavigate();
  
    function handleClick() {
      navigate("/login");
    }
    return (
        <button 
            className={css.btnEntrance} 
            type="button" 
            onClick={handleClick}
        >
            Войти
        </button>
    );
}

export const Menu = () => {  
    const [nav, setNav] = useState(false);

    return(      
    <nav className= {css.header}>      
        <div className={css.container}>
            <div className={css.box}>  
                <ul
                    className={
                    nav ? [css.menu, css.active].join(' ') : [css.menu]
                    }
                    >
                    <img className={css.logoNav} src={logoNav} alt="logonav" />
                    <li>      
                        <a className = {css.link} href='...'>Главная</a>
                    </li> 
                    <li>
                        <a className = {css.link} href='...' >Тарифы</a>
                    </li>
                    <li> 
                        <a className = {css.link} href='...'>FAQ</a>
                    </li>
                    <span className={css.register}>Зарегестрироваться</span>
                    <Button />
                </ul>
                
                <div onClick={() => setNav(!nav)} className={css.mobileBtn}>
                    {nav ? <AiOutlineClose size={30} color="white" /> : <AiOutlineMenu size={30} color="#029491"/>}
                </div>
            </div>
        </div>
    </nav>
    )
}