import React from "react";
import wandHeader from "../../../components/shared/icons/wandHeader.svg";
import css from "./entranceProfile.module.scss";
import { useNavigate } from "react-router-dom"

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
export const EntranceProfile = () => {
    return (
        <div className={css.entrance}>
            <a className={css.register} href="...">Зарегестрироваться</a>
            <img className={css.iconWand} src={wandHeader} alt="wandHeader"></img>
            <Button />
        </div>
    )
}