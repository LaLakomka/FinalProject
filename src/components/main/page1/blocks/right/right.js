import React from "react";
import FatWoman from "../../../../shared/icons/FatWoman.svg"
import css from "./right.module.scss";

export const Right = () => {
    return (
        <div>
            <img className={css.FatWoman} src={FatWoman} alt='FatWoman' />
        </div>
    )
}