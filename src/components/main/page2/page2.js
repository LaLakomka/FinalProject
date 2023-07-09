import React from "react";
import { Carousel1 } from "./slider/slider";
import Man from "../../shared/icons/man.svg"
import ManMobile from "../../shared/icons/manMobile.svg";
import css from "./page2.module.scss"

export const Page2 = () => {
    return (
        <div>
            <div className={css.Carousel}>
                <h1 className={css.title}>почему именно мы</h1>
            </div>
            <Carousel1 />
            <div>
                <img className={css.Man} src={Man} alt='Man' />
                <img className={css.ManMobile} src={ManMobile} alt="ManMobile" />
            </div>
        </div>
    )
}