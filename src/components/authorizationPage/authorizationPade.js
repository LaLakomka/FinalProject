import React from "react";
import icon from "../../components/shared/icons/AuthorizationPage/AuthorizationPage.svg"
import { Form } from "./Form/form"
import css from "./authorizationPage.module.scss";
import lock from '../shared/icons/AuthorizationPage/lock.svg';


export const AuthorizationPade = () => {

    return (
        <div className={css.authorizationPade}>
            
            <div>
                <div className={css.wrapper}>
                    <div>
                        <h1 className={css.title}>для оформления подписки <br></br> на тариф, необходимо <br></br> авторизоваться.</h1>
                    </div>
                    <div>
                        <img className={css.lock} src={lock} alt="lock " />
                    </div>
                </div>
                
            </div>
                <div>
                    <Form className={css.form}/> 
                    <img className={css.icon} src={icon} alt="icon" />  
                </div>
        </div>
    )
}