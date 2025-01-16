"use client";
import { ChevronDown } from 'lucide-react';

export const SortButton = () => {
  return (
    <button className="flex items-center gap-2 px-4 h-11 rounded-lg bg-navy-900/50 border border-gray-800 text-white">
      <span>Sort By</span>
      <ChevronDown size={20} />
    </button>
  );
};