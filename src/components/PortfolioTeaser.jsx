import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const PortfolioTeaser = () => {
    const { t } = useTranslation();

    const displayedProjects = projects.slice(0, 3);

    return (
        <section id="portfolio" className="py-20">
            <h2 className="text-3xl font-bold text-slate-200 mb-12 flex items-center">
                <span className="text-teal-400 mr-2 rtl:ml-2 rtl:mr-0">03.</span> {t('portfolio.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {displayedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className="text-center">
                <Link
                    to="/all-projects"
                    className="inline-block border border-teal-400 text-teal-400 px-8 py-4 rounded hover:bg-teal-400/10 transition-colors font-mono text-sm"
                >
                    {t('portfolio.viewAll')}
                </Link>
            </div>
        </section>
    );
};

export default PortfolioTeaser;
