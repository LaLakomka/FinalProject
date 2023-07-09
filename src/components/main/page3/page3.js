import React from "react";
import css from "./page3.module.scss"
import { TariffCards } from "./Tariffs/TariffCards/TariffCards";

export const Page3 = () => {
    return (
        <div>
           <h1 className={css.h1}>наши тарифы</h1> 
           <TariffCards />
        </div>
    )
}