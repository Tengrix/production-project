import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonPropsType> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button type="button" className={classNames(s.Button, {}, [className, s[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
