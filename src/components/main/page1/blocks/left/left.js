import React from "react";
import css from "./left.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"

export const Left = () => {
    const companyInfo = useSelector((state)=>state.profile.companyInfo);
    
    function Button () {
        const navigate = useNavigate();
    
        function handleClick() {
        navigate("/searchPage");
        }
        return (
            <button className={css.button}type="submit"
             onClick={handleClick}>Запросить данные
            </button>
        );
    }


    return (

        <div>
            <div className={css.leftBlock}>
                <h2 className={css.h2}> сервис по поиску 
                <br></br> публикаций<br></br> 
                о компании<br></br> по его инн</h2>
                <h3 className={css.h3}>Комплексный анализ публикаций, получение данных 
                <br></br> в формате PDF на электронную почту.</h3>
            </div>
            {companyInfo && <Button />}
        </div>
    )
}