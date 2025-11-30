import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    {/* Placeholder for image or graphic */}
                    <div className="w-full h-64 bg-navy-800 rounded-lg flex items-center justify-center border border-teal-400/30 hover:border-teal-400 transition-colors duration-300 group">
                        <span className="text-teal-400/50 text-6xl font-mono group-hover:text-teal-400 transition-colors duration-300">&lt;About /&gt;</span>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-slate-200 mb-6 flex items-center">
                        <span className="text-teal-400 mr-2 rtl:ml-2 rtl:mr-0">01.</span> {t('about.title')}
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        {t('about.description')}
                    </p>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-200 mb-2">{t('about.languagesTitle')}</h3>
                        <p className="text-slate-400">{t('about.languages')}</p>
                    </div>
                    <a
                        href="resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400/10 transition-colors font-mono text-sm"
                    >
                        {t('about.downloadResume')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
