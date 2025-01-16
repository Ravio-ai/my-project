import { MoreHorizontal } from 'lucide-react';

interface Challenge {
  firmName: string;
  price: number;
  originalPrice: number;
  points: number;
  cashback: string;
  accountSize: string;
  drawdownType: string;
  payoutPeriod: string;
}

const ChallengesTable = () => {
  const challenges: Challenge[] = [
    {
      firmName: "Alpha Trading",
      price: 3852,
      originalPrice: 4162,
      points: 1000,
      cashback: "32$ Off",
      accountSize: "$60,000",
      drawdownType: "Equity",
      payoutPeriod: "5days"
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500/10 to-blue-500/5">
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Firm Name</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Price</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Points/Cashback</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Account Size</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Drawdown Type</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Payout Period</th>
            <th className="px-6 py-4"></th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800/30">
          {challenges.map((challenge, index) => (
            <tr key={index} className="bg-navy-950/50 hover:bg-navy-900/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                    α
                  </div>
                  <span className="text-gray-300">{challenge.firmName}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-white font-medium">${challenge.price}</div>
                <div className="text-gray-500 text-sm line-through">${challenge.originalPrice}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-white">{challenge.points} Points</div>
                <div className="text-green-500 text-sm">{challenge.cashback}</div>
              </td>
              <td className="px-6 py-4">
                <span className="text-gray-300">{challenge.accountSize}</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-gray-300">{challenge.drawdownType}</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-gray-300">{challenge.payoutPeriod}</span>
              </td>
              <td className="px-6 py-4">
                <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                  <span>More Info</span>
                  <MoreHorizontal size={16} />
                </button>
              </td>
              <td className="px-6 py-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Buy Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChallengesTable;

