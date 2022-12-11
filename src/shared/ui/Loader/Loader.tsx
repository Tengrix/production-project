import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.css';

interface LoaderPropsType {
    className?: string;
}

export const Loader = ({ className }: LoaderPropsType) => (
    <div className={classNames('lds-facebook', {}, [className])}>
        <div />
        <div />
        <div />
    </div>
);
