import React from 'react';
import {Avatar} from './Avatar/avatar';
import {CompanyInfo} from '../authorizationHeader/Copanys/companys';
import {LoaderInfo} from '../authorizationHeader/Loader/loader';
import css from "./authorizationHeader.module.scss";
import { useSelector } from 'react-redux';

export const AuthorizationHeader = () => {

    const companyInfo = useSelector(state => state.profile.companyInfo)

    return (
        <div className={css.accountPanel}> 
            {companyInfo ? <CompanyInfo /> : <LoaderInfo />}
            <Avatar />
        </div>
    )
}

