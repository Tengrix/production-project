import {classNames} from 'shared/lib/classNames/classNames';
import s from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?:ThemeButton
}

export const Button:FC<ButtonPropsType> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button className={classNames(s.Button, {}, [className,s[theme]])} {...otherProps} >
            {children}
        </button>
    );
};