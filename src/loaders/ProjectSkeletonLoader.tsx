// components/ProjectSkeleton.tsx
import React from "react";

interface ProjectSkeletonProps {
    count?: number;
}

const ProjectSkeleton: React.FC<ProjectSkeletonProps> = ({ count = 3 }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="bg-gray-100 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700/50 animate-pulse"
                >
                    {/* Image placeholder */}
                    <div className="w-full h-48 bg-gray-300 dark:bg-slate-700" />

                    <div className="p-6 space-y-3">
                        {/* Project title */}
                        <div className="h-5 w-3/4 bg-gray-300 dark:bg-slate-700 rounded" />

                        {/* Description (two lines) */}
                        <div className="h-3 w-full bg-gray-300 dark:bg-slate-700 rounded" />
                        <div className="h-3 w-5/6 bg-gray-300 dark:bg-slate-700 rounded" />

                        {/* Tech chips */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {Array.from({ length: 3 }).map((__, chipIndex) => (
                                <div
                                    key={chipIndex}
                                    className="h-5 w-16 bg-gray-300 dark:bg-slate-700 rounded-full"
                                />
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-3 mt-4">
                            <div className="flex-1 h-9 bg-gray-300 dark:bg-slate-700 rounded-lg" />
                            <div className="flex-1 h-9 bg-gray-300 dark:bg-slate-700 rounded-lg" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectSkeleton;
