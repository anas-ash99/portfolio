import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-8 text-center text-slate-400 text-sm font-mono">
            <p>{t('footer.copyright')}</p>
        </footer>
    );
};

export default Footer;
