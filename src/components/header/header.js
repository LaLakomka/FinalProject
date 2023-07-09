import React from 'react'
import css from './header.module.scss';
import { LogoHeader } from '../shared/icons/logoHeader';
import { Menu } from './menu/menu';
import { EntranceProfile } from './profile/entranceProfile';
import { AuthorizationHeader } from '../header/authorizationHeader/authorizationHeader';
import { useSelector } from 'react-redux';

export const Header = () => {

    const accountInfo = useSelector((state)=>state.profile.companyInfo);
    const AccountElement = accountInfo ? AuthorizationHeader : EntranceProfile

    return (
        <header className={css.header}>
            <div className={css.headerWrapper}>
            <a href = "/"><LogoHeader /></a> 
            <Menu/>
            <AccountElement />
            </div>
        </header>
    )
}