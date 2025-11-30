import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const AllProjects = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-24 min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto px-6">
                <h1 className="text-4xl font-bold text-slate-200 mb-8">{t('portfolio.viewAll')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllProjects;
