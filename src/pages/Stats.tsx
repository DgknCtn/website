import React from 'react';
import { TrendingUp, BarChart2 } from 'lucide-react';

const Stats: React.FC = () => {
  const collections = [
    { 
      rank: 1,
      name: 'Bored Ape Yacht Club',
      floorPrice: 18.29,
      volume24h: 1298.2,
      change24h: 12.5,
      owners: 6.4,
      items: 10000
    },
    { 
      rank: 2,
      name: 'Azuki',
      floorPrice: 6.82,
      volume24h: 892.1,
      change24h: -5.2,
      owners: 5.1,
      items: 10000
    },
    { 
      rank: 3,
      name: 'Doodles',
      floorPrice: 2.95,
      volume24h: 456.3,
      change24h: 8.7,
      owners: 4.8,
      items: 10000
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1A1A1A] rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="text-blue-500" size={24} />
            <h3 className="text-lg font-semibold">Total Volume</h3>
          </div>
          <p className="text-3xl font-bold">1.2M ETH</p>
          <p className="text-green-500 text-sm mt-2">+5.2% from yesterday</p>
        </div>

        <div className="bg-[#1A1A1A] rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart2 className="text-blue-500" size={24} />
            <h3 className="text-lg font-semibold">Floor Price</h3>
          </div>
          <p className="text-3xl font-bold">18.29 ETH</p>
          <p className="text-red-500 text-sm mt-2">-2.1% from yesterday</p>
        </div>

        <div className="bg-[#1A1A1A] rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart2 className="text-blue-500" size={24} />
            <h3 className="text-lg font-semibold">Active Traders</h3>
          </div>
          <p className="text-3xl font-bold">24.5K</p>
          <p className="text-green-500 text-sm mt-2">+12.3% from yesterday</p>
        </div>
      </div>

      {/* Collections Table */}
      <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Top Collections</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0B0B0B]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Collection</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Floor Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Volume (24h)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">24h %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Owners</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Items</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {collections.map((collection) => (
                <tr key={collection.rank} className="hover:bg-[#2A2A2A]">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-4">#{collection.rank}</span>
                      <span className="font-medium">{collection.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {collection.floorPrice} ETH
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {collection.volume24h} ETH
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={collection.change24h > 0 ? 'text-green-500' : 'text-red-500'}>
                      {collection.change24h > 0 ? '+' : ''}{collection.change24h}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {collection.owners}K
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {collection.items}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stats;
