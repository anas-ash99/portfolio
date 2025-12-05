import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

const ProjectInfo = ({ project }) => {
    const { t } = useTranslation();
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <div>
            <div className={`grid grid-cols-1 ${project.architectureChart ? 'lg:grid-cols-2' : ''} gap-8 items-start mb-8`}>
                <div className="bg-navy-800 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-200 mb-4">Description</h2>
                    <p className="text-slate-400 leading-relaxed text-lg whitespace-pre-line">
                        {project.longDescription || t(`portfolio.${project.key}.description`)}
                    </p>
                </div>

                {project.architectureChart && (
                    <div className="w-full">
                        <div
                            className="relative rounded-lg overflow-hidden border border-slate-700 shadow-lg bg-navy-900/50 cursor-pointer group"
                            onClick={() => setIsImageOpen(true)}
                        >
                            <img
                                src={project.architectureChart}
                                alt="System Architecture"
                                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-navy-900/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Click to expand</span>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm text-center mt-2 italic">System Architecture</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setIsImageOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                        onClick={() => setIsImageOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={project.architectureChart}
                        alt="System Architecture Full Screen"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                    />
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-200 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="bg-teal-400/10 text-teal-400 px-3 py-1 rounded-full text-sm font-mono">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
