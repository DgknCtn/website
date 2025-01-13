import React from 'react';

const roadmapData = [
  {
    quarter: 'Q1 2024',
    title: 'Launch Phase',
    items: [
      'Launch of Vanth',
      'Community building activities on Twitter and Discord',
      'Website development and optimization',
      'Collection preparation',
      'Character-specific comic book development'
    ],
    icon: '🚀'
  },
  {
    quarter: 'Q2 2024',
    title: 'Minting Phase',
    items: [
      'Whitelist wallet collection process',
      'Initiation of minting process',
      'Special rewards for legendary Vanth holders',
      'Daily rewards through Discord and Twitter channels post-mint'
    ],
    icon: '🎨'
  },
  {
    quarter: 'Q3 2024',
    title: 'Staking & Token Phase',
    items: [
      'Launch of staking pool',
      'Secondary market creator earnings arrangements and community profit sharing (to be included in staking pool)',
      'Announcement of $VNTH Token'
    ],
    icon: '💎'
  },
  {
    quarter: 'Q4 2024',
    title: 'Exchange & Metaverse Phase',
    items: [
      'Listing of $VNTH Token on exchanges',
      'Vanth holders can stake $VNTH tokens from the staking pool',
      'Vanth metaverse space and collaboration with established collections',
      'Vanth Gaming launch announcement'
    ],
    icon: '🌐'
  },
  {
    quarter: 'Q1 2025',
    title: 'Gaming Phase',
    items: [
      'Vanth Gaming begins',
      'In-game events and token-focused daily and weekly rewards'
    ],
    icon: '🎮'
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
            ROADMAP
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our journey to revolutionize the NFT space. Each milestone brings us closer to our vision of creating a unique and valuable experience for our community.
          </p>
        </div>

        <div className="relative">
          {/* Mobile Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-teal-400 hidden sm:block"></div>

          <div className="space-y-16 sm:space-y-24">
            {roadmapData.map((phase, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:ml-auto'}`}>
                {/* Timeline Dot */}
                <div className="hidden sm:block absolute top-0 sm:top-8 left-4 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-2xl">
                      {phase.icon}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`relative sm:w-[calc(100%-2rem)] ${index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'}`}>
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Card Content */}
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                      {/* Quarter Badge */}
                      <div className="inline-block mb-4">
                        <div className="bg-gradient-to-r from-cyan-400/10 to-teal-400/10 text-cyan-400 font-bold px-4 py-1 rounded-full text-sm border border-cyan-400/20">
                          {phase.quarter}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-6 flex items-center gap-3">
                        <span className="sm:hidden text-2xl">{phase.icon}</span>
                        {phase.title}
                      </h3>

                      <ul className="space-y-4">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3 group/item">
                            <span className="text-cyan-400 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"></span>
                            <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;