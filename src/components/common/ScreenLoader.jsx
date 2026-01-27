import React from "react";

const ScreenLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin mx-auto"></div>
        <h1 className="mt-4 text-2xl font-bold text-indigo-600">
          Notes Sharing
        </h1>
        <p className="mt-2 text-gray-500">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default ScreenLoader;
