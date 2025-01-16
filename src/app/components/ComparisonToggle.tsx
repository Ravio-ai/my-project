// components/ComparisonToggle.tsx
"use client";

import { useState } from 'react';

const ComparisonToggle = () => {
  const [activeView, setActiveView] = useState<'compare' | 'detailed'>('compare');

  return (
    <div className="w-full flex justify-center py-4 relative">
      {/* Vertical divider line */}
      <div className="absolute h-full w-[1px] bg-blue-500/20"></div>
      
      {/* Toggle container */}
      <div className="flex bg-navy-800/50 rounded-full p-1 backdrop-blur-sm border border-blue-500/10 z-10">
        <button
          onClick={() => setActiveView('compare')}
          className={`px-6 py-2 rounded-full text-sm transition-all duration-200 ${
            activeView === 'compare'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          Compare
        </button>
        <button
          onClick={() => setActiveView('detailed')}
          className={`px-6 py-2 rounded-full text-sm transition-all duration-200 ${
            activeView === 'detailed'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          Detailed View
        </button>
      </div>
    </div>
  );
};

export default ComparisonToggle;