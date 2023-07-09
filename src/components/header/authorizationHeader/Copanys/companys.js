import React from 'react';
import { useSelector } from 'react-redux';
import css from "./companys.module.scss";


export const CompanyInfo = () => {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  return (
    <div className={css.wrapper}>
      <div >
        <span className={css.company}>Использовано компаний</span>
        <span className={css.black}>{companyQuantityInfo.eventFiltersInfo.usedCompanyCount}</span>
      </div>
      <div>
        <span className={css.company}>Лимит по компаниям</span>
        <span className={css.green}>{companyQuantityInfo.eventFiltersInfo.companyLimit}</span>
      </div>
    </div>
  )
}

