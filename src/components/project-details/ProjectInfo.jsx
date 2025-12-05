import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import SmartTextViewer from './SmartTextViewer';

const ProjectInfo = ({ project }) => {
    const { t, i18n } = useTranslation();
    const [isImageOpen, setIsImageOpen] = useState(false);

    // Get description based on current language, fallback to English
    const description = project.longDescription?.[i18n.language] || project.longDescription?.['en'] || "";

    return (
        <div>
            <div className={`grid grid-cols-1 ${project.architectureChart ? 'lg:grid-cols-[4fr_3fr]' : ''} gap-8 items-start mb-8`}>
                <div className="bg-navy-800 rounded-lg">
                    <h2 className="text-2xl font-bold text-slate-200 mb-4 px-6 pt-6">{t('projectDetails.description')}</h2>
                    <SmartTextViewer rawText={description} />
                </div>

                {project.architectureChart && (
                    <div className="w-full">
                        <div
                            className="relative rounded-lg overflow-hidden border border-slate-700 shadow-lg bg-navy-900/50 cursor-pointer group"
                            onClick={() => setIsImageOpen(true)}
                        >
                            <img
                                src={project.architectureChart}
                                alt={t('projectDetails.systemArchitecture')}
                                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-navy-900/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">{t('projectDetails.clickToExpand')}</span>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm text-center mt-2 italic">{t('projectDetails.systemArchitecture')}</p>
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
                        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-50"
                        onClick={() => setIsImageOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div onClick={(e) => e.stopPropagation()} className="w-full h-full flex items-center justify-center">
                        <TransformWrapper
                            initialScale={1}
                            minScale={0.5}
                            maxScale={4}
                            centerOnInit={true}
                        >
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <React.Fragment>
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
                                        <button onClick={() => zoomIn()} className="bg-navy-800/80 text-white p-2 rounded-full hover:bg-navy-700 transition-colors border border-slate-600">
                                            <ZoomIn className="w-6 h-6" />
                                        </button>
                                        <button onClick={() => zoomOut()} className="bg-navy-800/80 text-white p-2 rounded-full hover:bg-navy-700 transition-colors border border-slate-600">
                                            <ZoomOut className="w-6 h-6" />
                                        </button>
                                        <button onClick={() => resetTransform()} className="bg-navy-800/80 text-white px-4 py-2 rounded-full hover:bg-navy-700 transition-colors border border-slate-600 text-sm font-mono">
                                            {t('projectDetails.reset')}
                                        </button>
                                    </div>
                                    <TransformComponent wrapperClass="!w-full !h-full flex items-center justify-center" contentClass="!w-full !h-full flex items-center justify-center">
                                        <img
                                            src={project.architectureChart}
                                            alt={t('projectDetails.systemArchitecture')}
                                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                                        />
                                    </TransformComponent>
                                </React.Fragment>
                            )}
                        </TransformWrapper>
                    </div>
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-200 mb-4">{t('projectDetails.technologies')}</h3>
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
