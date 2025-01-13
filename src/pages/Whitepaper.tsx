import React from 'react';
import { motion } from 'framer-motion';

const Whitepaper: React.FC = () => {
  const sections = [
    {
      title: 'Introduction',
      content: `VANTH NFT is a revolutionary digital art collection that combines unique artwork with utility through staking and governance mechanisms. Our vision is to create a sustainable ecosystem that rewards long-term holders and active community members.`
    },
    {
      title: 'Tokenomics',
      content: `Total Supply: 10,000 NFTs
Whitelist Price: 0.08 ETH
Public Price: 0.1 ETH
Royalty Fee: 5%
Staking Rewards: Daily VNTH token distribution`
    },
    {
      title: 'Utility',
      content: `• NFT Staking with daily rewards
• Governance rights in DAO
• Exclusive merchandise access
• Priority access to future drops
• Community events and giveaways`
    },
    {
      title: 'Technology',
      content: `Smart Contracts: Solidity (ERC-721A)
Blockchain: Ethereum
IPFS Storage: NFT metadata and images
Security: Multi-sig treasury and time-locked contracts`
    },
    {
      title: 'Team',
      content: `Our team consists of experienced developers, artists, and marketing professionals with a proven track record in the NFT and DeFi space. We are committed to building a long-term project with real utility and value for our community.`
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
        >
          Whitepaper
        </motion.h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20"
            >
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                {section.title}
              </h2>
              <div className="text-gray-300 whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center text-gray-400"
        >
          <p>For more detailed information, join our Discord community or follow us on Twitter.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Whitepaper;