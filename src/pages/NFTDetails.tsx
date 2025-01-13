import React from 'react';
import { useParams } from 'react-router-dom';
import { Eye, Heart, Share2, Clock, Tag } from 'lucide-react';

const NFTDetails: React.FC = () => {
  const { id } = useParams();

  // Mock data - replace with actual API call
  const nft = {
    name: 'Cool Ape #1234',
    collection: 'Bored Ape Yacht Club',
    owner: '0x1234...5678',
    description: 'A unique Bored Ape NFT with rare traits...',
    price: '99.5',
    lastSale: '85.2',
    views: '1.2K',
    favorites: '856',
    image: '/images/nft1.png',
    traits: [
      { type: 'Background', value: 'Blue', rarity: '8%' },
      { type: 'Fur', value: 'Gold', rarity: '3%' },
      { type: 'Eyes', value: 'Laser', rarity: '5%' },
      { type: 'Clothes', value: 'Suit', rarity: '12%' },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div>
          <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full aspect-square object-cover"
            />
          </div>
          
          {/* Traits */}
          <div className="mt-6 bg-[#1A1A1A] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Traits</h3>
            <div className="grid grid-cols-2 gap-4">
              {nft.traits.map((trait) => (
                <div
                  key={trait.type}
                  className="bg-[#2A2A2A] rounded-lg p-4"
                >
                  <p className="text-gray-400 text-sm">{trait.type}</p>
                  <p className="font-semibold mt-1">{trait.value}</p>
                  <p className="text-blue-500 text-sm mt-1">{trait.rarity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-blue-500">{nft.collection}</p>
              <h1 className="text-3xl font-bold mt-1">{nft.name}</h1>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 hover:bg-[#2A2A2A] rounded-lg">
                <Share2 size={20} />
              </button>
              <button className="p-2 hover:bg-[#2A2A2A] rounded-lg">
                <Heart size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
            <div className="flex items-center">
              <Eye size={16} className="mr-1" />
              {nft.views} views
            </div>
            <div className="flex items-center">
              <Heart size={16} className="mr-1" />
              {nft.favorites} favorites
            </div>
          </div>

          <div className="bg-[#1A1A1A] rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Tag size={20} className="text-gray-400" />
                <span className="text-gray-400">Current Price</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-gray-400" />
                <span className="text-gray-400">Last Sale: {nft.lastSale} ETH</span>
              </div>
            </div>
            <p className="text-3xl font-bold">{nft.price} ETH</p>
            <button className="w-full bg-blue-500 text-white py-3 rounded-xl mt-4 hover:bg-blue-600 font-semibold">
              Buy Now
            </button>
          </div>

          <div className="bg-[#1A1A1A] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Description</h3>
            <p className="text-gray-400">{nft.description}</p>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Contract Address</span>
                  <span className="text-blue-500">0x123...789</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Token ID</span>
                  <span>{id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Token Standard</span>
                  <span>ERC-721</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Blockchain</span>
                  <span>Ethereum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
