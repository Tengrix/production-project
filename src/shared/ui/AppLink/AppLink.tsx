import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';

export enum AppLinkTheme{
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkPropsType extends LinkProps{
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkPropsType> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(s.navbar, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
