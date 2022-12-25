import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

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
