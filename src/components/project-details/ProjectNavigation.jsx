import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';

const ProjectNavigation = () => {
    const { t } = useTranslation();

    return (
        <Link to="/all-projects" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
            {t('projectDetails.backToProjects')}
        </Link>
    );
};

export default ProjectNavigation;
