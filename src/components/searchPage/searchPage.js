import React from 'react';
import {SearchForm} from './SearchForm/SearchForm';
import css from "./SearchPage.module.scss";
import rocketMan from '../shared/icons/Form2/rocketMan.svg';
import sheet from '../shared/icons/Form2/sheet.svg';
import folders from '../shared/icons/Form2/Folders.svg';

export const SearchPage = () => {
  return (
    <main className={css.search}>
      <div className={css.searchWrapper}>
        <div className={css.leftBox}>
          <h1 className={css.h1}>найдите необходимые <br></br>данные в пару кликов.</h1>
            <p className={css.p}>Задайте параметры поиска.<br></br> 
              Чем больше заполните, тем точнее поиск
            </p>
          <SearchForm />
        </div>
        <div>
          <div className={css.imgs}>
            <img className={css.imgSheet}src={sheet} alt='document' />         
            <img className={css.folders} src={folders} alt='folders' />
          </div>
          <div>
            <img className={css.rocketManImg} src={rocketMan} alt='searchBar' />
          </div>
        </div>
      </div>
    </main>
  )
}



