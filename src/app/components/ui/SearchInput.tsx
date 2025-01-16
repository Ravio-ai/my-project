"use client";
import { Search, ChevronDown } from 'lucide-react';

export const SearchInput = () => {
    return (
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search Your Favourite Firms"
          className="w-full h-12 pl-12 pr-12 rounded-lg bg-navy-900/30 border border-gray-800/50 text-white text-sm focus:outline-none focus:border-blue-500/50"
        />
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
      </div>
    );
  };