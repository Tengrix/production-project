import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorPropsType {
    className?: string;
}

export const PageError = ({ className }: PageErrorPropsType) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
