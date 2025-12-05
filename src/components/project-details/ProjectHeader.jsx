import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Gitlab } from 'lucide-react';

const ProjectHeader = ({ project }) => {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="text-4xl font-bold text-slate-200 mb-4">{t(`portfolio.${project.key}.title`)}</h1>

            <div className="flex gap-4 mb-8">
                {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                )}
                {project.gitlab && (
                    <a href={project.gitlab} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors">
                        <Gitlab className="w-6 h-6" />
                        <span className="font-medium">Source Code</span>
                    </a>
                )}
                {project.external && project.external !== '#' && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                        <ExternalLink className="w-6 h-6" />
                    </a>
                )}
            </div>
        </>
    );
};

export default ProjectHeader;
