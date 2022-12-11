import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

interface PageLoaderPropsType {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderPropsType) => (
    <div className={classNames(s.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
