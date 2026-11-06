import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Gitlab, Globe } from 'lucide-react';

const ProjectHeader = ({ project }) => {
    const { t } = useTranslation();
    const websiteUrl = project.websiteUrl || project.website;

    return (
        <>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h1 className="text-4xl font-bold text-slate-200">{t(`portfolio.${project.key}.title`)}</h1>
                {project.status === 'in-progress' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-400/10 text-amber-400 border border-amber-400/30">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                        {t('portfolio.inProgress')}
                    </span>
                )}
            </div>

            <div className="flex gap-4 mb-8 flex-wrap">
                {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                )}
                {project.gitlab && (
                    <a href={project.gitlab} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors">
                        <Gitlab className="w-6 h-6" />
                        <span className="font-medium">{t('projectDetails.sourceCode')}</span>
                    </a>
                )}
                {websiteUrl && (
                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors">
                        <Globe className="w-6 h-6" />
                        <span className="font-medium">{t('projectDetails.website')}</span>
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
