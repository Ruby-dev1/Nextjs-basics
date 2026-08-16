import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="flex max-w-100 h-fit gap-2 items-center p-1.5 rounded-full overflow-hidden animate-pulse">
      
      {/* Image skeleton */}
      <div className="h-16 w-16 rounded-sm shrink-0 bg-gray-200" />

      {/* Name & description skeleton */}
      <div className="flex-1 space-y-2">
        {/* Category name */}
        <div className="h-4 w-24 rounded bg-gray-200" />

        {/* Description */}
        <div className="h-3 w-full rounded bg-gray-200" />
        <div className="h-3 w-3/4 rounded bg-gray-200" />
      </div>

    </div>
  );
};

export default CategorySkeleton;