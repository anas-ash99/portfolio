import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-16">
            <span className="text-teal-400 font-mono text-lg mb-5 block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {t('hero.greeting')}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Anas Ashraf.
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                {t('hero.role')}
            </h2>
            <p className="text-slate-400 max-w-xl text-lg mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                {t('hero.tagline')}
            </p>
            <a
                href="#portfolio"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded hover:bg-teal-400/10 transition-all duration-300 font-mono text-sm animate-fade-in-up"
                style={{ animationDelay: '500ms' }}
            >
                Check out my work!
            </a>
        </section>
    );
};

export default Hero;
