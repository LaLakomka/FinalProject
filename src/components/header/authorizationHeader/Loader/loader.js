import React from 'react';
import css from "./loader.module.scss";
import { RotatingLines } from 'react-loader-spinner';

export const LoaderInfo = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
        />
    </div>
  )
}
