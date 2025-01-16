"use client";
import { ChevronDown } from 'lucide-react';

interface SelectMenuProps {
  placeholder: string;
  options?: string[];
  className?: string;
}

export const SelectMenu = ({ placeholder, options = [], className = "" }: SelectMenuProps) => {
    return (
      <div className={`relative flex-1 ${className}`}>
        <select className="w-full h-12 pl-4 pr-12 text-sm appearance-none rounded-lg bg-navy-900/30 border border-gray-800/50 text-white focus:outline-none focus:border-blue-500/50">
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
      </div>
    );
  };
