import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const Main = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Main')}
            <BugButton />
        </div>
    );
};

export default Main;
