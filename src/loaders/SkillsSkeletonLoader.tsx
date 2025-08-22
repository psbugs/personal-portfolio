// components/SkillsSkeleton.tsx
import React from "react";

interface SkillsSkeletonProps {
    rows?: number;
    itemsPerRow?: number;
}

const SkillsSkeletonLoader: React.FC<SkillsSkeletonProps> = ({ rows = 2 }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Array.from({ length: rows }).map((_, i) => (
                <div
                    key={i}
                    className={`bg-gray-100 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700/50 animate-pulse`}
                >
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gray-300 dark:bg-slate-700" />
                    <div className="h-4 w-20 mx-auto bg-gray-300 dark:bg-slate-700 rounded" />
                </div>
            ))}
        </div>
    );
};

export default SkillsSkeletonLoader;
