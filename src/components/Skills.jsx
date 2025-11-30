
import React from 'react';
import { useTranslation } from 'react-i18next';

const skills = [
    "Android Mobile Development (Jetpack Compose)", "Cloud-Native Applications",
    "System Design & Architecture", "DevOps", "Databases",
    "Prompt Engineering", "Scrum / Teamwork", "Quick Learner"
];

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold text-slate-200 mb-12 flex items-center">
                <span className="text-teal-400 mr-2 rtl:ml-2 rtl:mr-0">02.</span> {t('skills.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="bg-navy-800 p-4 rounded hover:translate-y-[-5px] transition-transform duration-300 border border-transparent hover:border-teal-400/30 group"
                    >
                        <span className="text-slate-400 group-hover:text-teal-400 font-mono text-sm">
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
