import React from 'react'
import css from  '../footer/footer.module.scss';
import LogoFooter from "../shared/icons/LogoFooter.svg";


export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerWrapper}>
        <div>
          <img 
            className={css.LogoFooter} 
            src={LogoFooter} 
            alt='LogoFooter' 
          />
        </div>
        <div className={css.footerInfo}>
          <div>г. Москва, Цветной б-р, 40</div>
          <div>+7 495 771 21 11</div>
          <div>info@skan.ru</div>
          <p className={css.p}>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  )
}