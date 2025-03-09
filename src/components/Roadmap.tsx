import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: "2025 Q1",
      items: [
        "Create a unique narrative and artistic vision for each special character in the collection.",
        "Build a strong community on social platforms (Twitter and Discord).",
        "Design and finalize the artwork, take inspiration from the best and ensure high quality.",
        "Collaborate with DAOs and other NFT projects to best promote the project."
      ]
    },
    {
      title: "2025 Q2",
      items: [
        "Creating a system that instantly answers questions and directs new participants by integrating AI chatbots on our Discord server.",
        "Make the community the most predatory and open the first mint phase of the collection to whitelisted contributors, followed by transparent and fair sale to the public.",
        "Early adopters gain first access to key roles and interactive features.",
        "Special incentive services for Rare and Legend NFT owners."
      ]
    },
    {
      title: "2025 Q3",
      items: [
        "Assigning specific roles to each owner and creating a dedicated DAO.",
        "Special events within the project, raffles and access to decision-making within the project.",
        "Staking operations are initiated. At least 80% of secondary market revenues are paid back to the community through Vanth staking.",
        "Policies are developed to protect the floor price and a stable floor price is set with a focus on stability."
      ]
    },
    {
      title: "2025 Q4",
      items: [
        "VNTH Token Launch:",
        "For Vanth holders, the VNTH token will be quickly released to wallets via airdrop.",
        "Collaborations: Partner with established NFT collections for cross-community benefits and joint events."
      ]
    },
    {
      title: "2026",
      items: [
        "AI + AR integrations for utilisation of NFTs in the physical world: For example, you will be able to animate your NFT in the real world with the phone camera.",
        "Game integration: Develop a play-to-win (P2E) game featuring the NFT collection as in-game characters, assets.",
        "Private chat rooms created for owners to network and keep the community alive.",
        "The community will be allowed to produce stories, songs or fan art for the collection and the best ones will be rewarded.",
        "Opportunities such as workshops with Web3 experts or career counselling will be offered."
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Roadmap</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-vanth-primary/20 md:left-1/2" />
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Phase Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-vanth-dark/30 backdrop-blur-sm p-6 rounded-lg border border-vanth-primary/10">
                    <h3 className="text-xl font-bold text-vanth-accent mb-4">{phase.title}</h3>
                    <ul className={`space-y-2 text-sm ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-vanth-accent" 
                     style={{ top: `${(index * 2 + 1) * 50}px` }} />

                {/* Empty div for spacing on alternate sides */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
