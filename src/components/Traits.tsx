import React from 'react';

const traitCategories = [
  {
    name: 'Type',
    description: 'Unique character types that define the core essence of each Vanth',
    totalVariants: 5,
    examples: ['Eternal', 'Demon', 'Mecha', 'Toxic', 'Human']
  },
  {
    name: 'Background',
    description: 'Mystical environments and atmospheric settings',
    totalVariants: 15,
    examples: ['Mystic Forest', 'Ancient Temple', 'Cosmic Void', 'Crystal Cave']
  },
  {
    name: 'Hair',
    description: 'Distinctive hairstyles ranging from ethereal to fierce',
    totalVariants: 20,
    examples: ['Crystal Spikes', 'Ethereal Waves', 'Flame Locks', 'Shadow Strands']
  },
  {
    name: 'Eyes',
    description: 'Mesmerizing eye designs with unique patterns and colors',
    totalVariants: 18,
    examples: ['Dragon Eyes', 'Void Gaze', 'Star Light', 'Ancient Runes']
  },
  {
    name: 'Mouth',
    description: 'Expressive mouth features that convey character',
    totalVariants: 12,
    examples: ['Mystic Smile', 'Battle Cry', 'Ethereal Whisper', 'Dragon Fangs']
  },
  {
    name: 'Clothes',
    description: 'Stylish and mythical attire that defines character status',
    totalVariants: 25,
    examples: ['Ancient Armor', 'Mystic Robes', 'Shadow Cloak', 'Crystal Mail']
  },
  {
    name: 'Weapon',
    description: 'Powerful weapons and magical artifacts',
    totalVariants: 20,
    examples: ['Dragon Blade', 'Void Staff', 'Crystal Bow', 'Shadow Daggers']
  },
  {
    name: 'Accessories',
    description: 'Special items and decorative elements that add unique flair',
    totalVariants: 22,
    examples: ['Ancient Amulet', 'Dragon Crown', 'Void Rings', 'Crystal Wings']
  }
];

const TraitCard: React.FC<{
  trait: typeof traitCategories[0];
  index: number;
}> = ({ trait, index }) => {
  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl blur opacity-30 group-hover:opacity-60 animate-pulse transition duration-300"></div>
      
      {/* Card Content */}
      <div className="relative h-full flex flex-col bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.25),transparent_50%)]"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            {trait.name}
          </h3>
          <span className="px-4 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium">
            {trait.totalVariants}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 flex-grow">
          {trait.description}
        </p>

        {/* Examples */}
        <div className="space-y-2">
          {trait.examples.map((example, i) => (
            <div
              key={i}
              className="flex items-center space-x-2 group/item transition-all duration-300 hover:translate-x-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"></span>
              <span className="text-sm text-gray-300 group-hover/item:text-cyan-400 transition-colors">
                {example}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Traits: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-400/20 rounded-full blur-3xl"></div>
          <h1 className="relative text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
            TRAITS
          </h1>
          <p className="relative text-gray-400 max-w-2xl mx-auto text-lg">
            Discover the unique traits that make each Vanth NFT special. Each trait category offers diverse variations, creating truly unique characters.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {traitCategories.map((trait, index) => (
            <TraitCard key={index} trait={trait} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traits;
