import React from 'react';
import css from "./resultPage.module.scss";
import aim from '../shared/icons/resultPage/resultPage.svg';
import { useSelector } from 'react-redux';
import {Cards} from './publicCards/Cards';
import {Carousel3} from './resultCarousel/carousel3';
import {LoaderInfo} from '../header/authorizationHeader/Loader/loader';

export const ResultPage = () => {
  let fundedDocs = useSelector(state => state.histograms.histogramInfo)
  const Carousel = fundedDocs ? <Carousel3 /> : <LoaderInfo />
  return (
    <main className={css.Main}>
      <div className={css.Wrapper}>  
        <div className={css.resultMain}>
          <div className={css.mainBox}>
            <h1 className={css.title}>Ищем. Скоро будут результаты</h1>
            <section>Поиск может занять некоторое время, просим сохранять терпение.</section>
          </div>
          <div className={css.img}>
            <img src={aim} alt='aim'/>
          </div>
        </div>
        <div>
          <div className={css.mainBox}>
            <h1 className={`${css.title} ${css.titleMiddle}`}>общая сводка</h1>
            <section className={css.resultMain}>Найдено {fundedDocs?.length||0} варианта(ов)</section>
          </div>
          {Carousel}
        </div>
          <div>
            <h1 className={`${css.title} ${css.titleMiddle}`}>cписок документов</h1>
            <Cards />
          </div>
      </div>  
    </main>
  )
}

