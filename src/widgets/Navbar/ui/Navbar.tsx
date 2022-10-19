import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

interface NavbarPropsType {
    className?: string;
}

export const Navbar = ({className}: NavbarPropsType) => {

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={s.mainLink}>MAIN</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>ABOUT</AppLink>
            </div>
        </div>
    );
};


