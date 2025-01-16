"use client";

import { SearchInput } from './ui/SearchInput';
import { SortButton } from './ui/SortButton';
import { SelectMenu } from './ui/SelectMenu';
import { ChallengeSizeSlider } from './ui/ChallengeSizeSlider';
import ComparisonToggle from './ComparisonToggle';

const ChallengesHeader = () => {
    return (
      <div className="mb-8">
        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Exclusive Offers on Prop Firm Challenges
          </h1>
          <p className="text-gray-400 text-sm">
            Unlock Discounts, Cashback, and Special Deals on Every Prop Firm Challenge Account!
          </p>
        </div>
  
        {/* Search and Sort Section */}
        <div className="flex items-center justify-between gap-6 mb-6">
          <SearchInput />
          <SortButton />
        </div>
        <ComparisonToggle />
  
        {/* Filters Section */}
        <div className="flex items-center gap-6 mb-8">
          <SelectMenu placeholder="Select Prop Firms" />
          <SelectMenu placeholder="Select Challenge Types" className="border border-blue-500/30" />
          <ChallengeSizeSlider />
        </div>
      </div>
    );
  };
export default ChallengesHeader;
  