import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

const Explore: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  // Generate array of 10 NFTs
  const mockNFTs = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Artwork #${i + 1}`,
    collection: 'Gallery',
    price: ((Math.random() * 2 + 0.5).toFixed(1)),
    image: `/images/nft${i + 1}.png`
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-xl p-2">
          <Filter size={20} className="text-gray-400" />
          <select 
            className="bg-transparent text-white focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Art">Art</option>
            <option value="Gaming">Gaming</option>
            <option value="PFPs">PFPs</option>
          </select>
        </div>

        <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-xl p-2">
          <ChevronDown size={20} className="text-gray-400" />
          <select 
            className="bg-transparent text-white focus:outline-none"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="All">Price: All</option>
            <option value="Low">Price: Low to High</option>
            <option value="High">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockNFTs.map((nft) => (
          <div key={nft.id} className="bg-[#1A1A1A] rounded-xl overflow-hidden">
            <img 
              src={nft.image} 
              alt={nft.name} 
              className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300" 
            />
            <div className="p-4">
              <p className="text-sm text-gray-400">{nft.collection}</p>
              <h3 className="text-white font-semibold mt-1">{nft.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-white font-semibold">{nft.price} ETH</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
