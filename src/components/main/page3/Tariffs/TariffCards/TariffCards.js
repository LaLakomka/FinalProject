import React from 'react';
import css from "../TariffCards/TariffCards.module.scss";
import lamp from '../../../../shared/icons/iconsTariffs/lamp.svg';
import target from '../../../../shared/icons/iconsTariffs/target.svg';
import nout from '../../../../shared/icons/iconsTariffs/nout.svg';


export const TariffCards = () => {

  const buttons = document.querySelectorAll('.button');
  //let activeButtonIndex = 0; // индекс активной кнопки
  
  buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
      setActiveButton(index);
    });
  
    button.addEventListener('mouseleave', () => {
      resetButtonStyles();
    });
  
    button.addEventListener('click', () => {
      setActiveButton(index);
    });
  });
  
  function setActiveButton(index) {
    resetButtonStyles();
    buttons[index].classList.add('active');
    buttons[index].innerText = 'Перейти в личный кабинет';
  }
  
  function resetButtonStyles() {
    buttons.forEach((button) => {
      button.classList.remove('active');
      button.innerText = 'Подробнее' + (Array.from(buttons).indexOf(button) + 1);
    });
  }

  return (
    <div className={css.cards}>
      <div className={css.cardsCard}>
        <div className={css.cardBeginner}>
          <div className={css.title}>
            <h1>Beginner</h1>
            <section>Для небольшого исследования</section>
          </div>
          <div className={css.lamp}>
            <img src={lamp} alt='lamp' />
          </div> 
        </div>        
        <div className={[css.cardBody, css.cardBeginner]}>
          <span className={css.actualTariff}>Текущий тариф</span>
          <h2 className={css.price}>799 ₽<span className={css.oldPrice}>1 200 ₽</span></h2>
          <section className={css.priceExplanation}>или 150 ₽/мес. при рассрочке на 24 мес.</section>
          <h3 className={css.cardList}>В тариф входит:</h3>
          <ul>
            <li className={css.listItem}>Безлимитная история запросов</li>
            <li className={css.listItem}>Безопасная сделка</li>
            <li className={css.listItem}>Поддержка 24/7</li>
          </ul>
          <button className={css.button}>Подробнее</button>
        </div>
      </div>
      <div className={css.cardsCard}>
      <div className={css.cardPro}>
          <div className={css.title}>
            <h1>Pro</h1>
            <section>Для HR и фрилансеров</section>
          </div>
          <div className={css.target}>
            <img src={target} alt='target' />
          </div> 
        </div>        
        <div className={[css.cardBody, css.cardPro]}>
            <span className={css.actualTariff} style={{visibility:'hidden'}}>Текущий тариф</span>
            <h2 className={css.price}>1 299 ₽<span className={css.oldPrice}>2 600 ₽</span></h2>
            <section className={css.priceExplanation}>или 279 ₽/мес. при рассрочке на 24 мес.</section>
            <h3 className={css.cardList}>В тариф входит:</h3>
            <ul>
              <li className={css.listItem}>Все пункты тарифа Beginner</li>
              <li className={css.listItem}>Экспорт истории</li>
              <li className={css.listItem}>Рекомендации по приоритетам</li>
            </ul>
            <button className={css.button}>Подробнее</button>
        </div>
      </div>
      <div className={css.cardsCard}>
      <div className={css.cardBusiness}>
          <div className={css.title}>
            <h1>Business</h1>
            <section>Для корпоративных клиентов</section>
          </div>
          <div className={css.nout}>
            <img src={nout} alt='nout' />
          </div> 
        </div>        
        <div className={[css.cardBody, css.cardBusiness]}>
            <span className={css.actualTariff} style={{visibility:'hidden'}}>Текущий тариф</span>
            <h2 className={css.price3}>2 379 ₽<span className={css.oldPrice}>3 700 ₽</span></h2>
            <h3 className={css.cardList}>В тариф входит:</h3>
            <ul>
              <li className={css.listItem}>Все пункты тарифа Pro</li>
              <li className={css.listItem}>Безлимитное количество запросов</li>
              <li className={css.listItem}>Приоритетная поддержка</li>
            </ul>
            <button className={css.button}>Подробнее</button>
        </div>
      </div>
    </div>
  )
}

