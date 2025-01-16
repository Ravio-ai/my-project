"use client";
import { useState } from 'react';

export const ChallengeSizeSlider = () => {
  const [value, setValue] = useState(1000000); // 1M default

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-400 text-sm">Challenge Size</span>
      <div className="relative w-24">
        <div className="h-1 bg-blue-500/20 rounded-full">
          <div className="absolute h-1 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
        </div>
        <div 
          className="absolute w-3 h-3 bg-white rounded-full -translate-y-1/2 cursor-pointer"
          style={{ left: '70%', top: '50%' }}
        />
      </div>
      <span className="text-yellow-500 text-sm">1M $</span>
    </div>
  );
};
