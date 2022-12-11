import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './NotFoundPage.module.scss';

interface NotFoundPagePropsType {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPagePropsType) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};
