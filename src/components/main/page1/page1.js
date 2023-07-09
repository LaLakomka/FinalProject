import React from "react";
import { Left } from "../page1/blocks/left/left";
import { Right } from "./blocks/right/right";
import css from "./page1.module.scss"

export const Page1 = () => {
    return (

        <div className={css.Page1Wrapper}>
            <Left />
            <Right />
        </div>
            
    )
}
