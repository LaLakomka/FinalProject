import React from "react";
import { Page1 } from "../main/page1/page1";
import { Page2 } from "./page2/page2"; 
import { Page3 } from "../main/page3/page3";
import css from "./main.module.scss"

export const Main = () => {
  return (
    <main className={css.main}>
      <div className={css.mainWrapper}>
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    </main>
  );
}

