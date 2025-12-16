import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import Footer from '../components/Footer';
import ProjectNavigation from '../components/project-details/ProjectNavigation';
import ProjectHeader from '../components/project-details/ProjectHeader';
import ProjectInfo from '../components/project-details/ProjectInfo';
import ProjectMedia from '../components/project-details/ProjectMedia';


const ProjectDetails = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const project = projects.find(p => p.id === id);
    if (!project) {
        return (
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl text-slate-200">{t('projectDetails.notFound')}</h1>
                <Link to="/all-projects" className="mt-4 text-teal-400 hover:text-teal-300">
                    {t('projectDetails.backToProjects')}
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen flex flex-col">
            <div className="w-full lg:w-[90%] mx-auto px-6 md:px-12">
                <ProjectNavigation />

                <ProjectHeader project={project} />

                <ProjectInfo project={project} />

                <ProjectMedia project={project} />
            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetails;
