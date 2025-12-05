import React from 'react';

const ProjectMedia = ({ project }) => {
    // Check if project has media defined
    const hasMedia = project.media && project.media.length > 0;

    const isGCSUrl = (url) => {
        return url && (url.includes('storage.cloud.google.com') || url.includes('storage.googleapis.com'));
    };

    const getProcessedMedia = (item) => {
        if (isGCSUrl(item.url)) {
            // Convert storage.cloud.google.com to storage.googleapis.com for direct access
            // Pattern: https://storage.cloud.google.com/BUCKET_NAME/OBJECT_PATH
            // Target: https://storage.googleapis.com/BUCKET_NAME/OBJECT_PATH
            if (item.url.includes('storage.cloud.google.com')) {
                const newUrl = item.url.replace('storage.cloud.google.com', 'storage.googleapis.com');
                return { ...item, url: newUrl };
            }
        }
        return item;
    };

    if (!hasMedia) {
        return (
            <div className="space-y-6">
                {/* Default Placeholders if no media is present */}
                <div className="bg-navy-800 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-slate-700 hover:border-teal-400/50 transition-colors group">
                    <div className="text-center">
                        <span className="block text-4xl mb-2">🖼️</span>
                        <span className="text-slate-500 group-hover:text-teal-400 transition-colors">No images available</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {project.media.map((rawItem, index) => {
                const item = getProcessedMedia(rawItem);

                return (
                    /* 1. break-inside-avoid: Prevents the card from being cut in half across columns.
                       2. mb-8: Adds vertical spacing (since gap only handles horizontal space in columns).
                       3. inline-block: Helps ensure the break-avoid behavior works consistently.
                    */
                    <div
                        key={index}
                        className="break-inside-avoid mb-8 w-full bg-navy-800 rounded-lg overflow-hidden border border-slate-700 shadow-lg flex flex-col"
                    >
                        {item.type === 'image' && (
                            <img
                                src={item.url}
                                alt={item.caption || `Project screenshot ${index + 1}`}
                                // Removed flex-grow, added h-auto to respect natural aspect ratio
                                className="w-full h-auto object-cover"
                            />
                        )}

                        {item.type === 'video' && (
                            <video
                                controls
                                className="w-full h-auto"
                                poster={item.poster}
                            >
                                <source src={item.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {item.caption && (
                            <div className="p-3 bg-navy-900/50 text-slate-400 text-sm text-center italic border-t border-slate-700/50">
                                {item.caption}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectMedia;
