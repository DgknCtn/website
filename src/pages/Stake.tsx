import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowUpRight, Coins, Users, Clock } from 'lucide-react';

const Stake: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Stake istatistikleri
  const stakeStats = {
    totalStakers: 0,
    totalStaked: 0,
    dailyRewards: 0,
    apr: 0
  };

  const handleConnectWallet = async () => {
    try {
      // @ts-ignore
      if (window.ethereum) {
        // @ts-ignore
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        if (accounts.length > 0) {
          setIsWalletConnected(true);
        }
      } else {
        alert('Please install MetaMask to use this feature');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Stake & Earn</h1>
          <p className="text-gray-400">Stake your Vanth NFT and earn VNTH tokens</p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-vanth-accent/10 text-vanth-accent">
            <Clock size={16} />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-vanth-dark/80 to-vanth-dark/40 backdrop-blur-sm p-6 rounded-xl border border-vanth-primary/10 hover:border-vanth-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-vanth-primary/10 rounded-lg">
                <Users className="text-vanth-accent" size={20} />
              </div>
              <h3 className="text-sm text-gray-400">Total Stakers</h3>
            </div>
            <p className="text-2xl font-bold">{stakeStats.totalStakers}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-vanth-dark/80 to-vanth-dark/40 backdrop-blur-sm p-6 rounded-xl border border-vanth-primary/10 hover:border-vanth-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-vanth-primary/10 rounded-lg">
                <Wallet className="text-vanth-accent" size={20} />
              </div>
              <h3 className="text-sm text-gray-400">Total Staked</h3>
            </div>
            <p className="text-2xl font-bold">{stakeStats.totalStaked} NFTs</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-vanth-dark/80 to-vanth-dark/40 backdrop-blur-sm p-6 rounded-xl border border-vanth-primary/10 hover:border-vanth-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-vanth-primary/10 rounded-lg">
                <Coins className="text-vanth-accent" size={20} />
              </div>
              <h3 className="text-sm text-gray-400">Daily Rewards</h3>
            </div>
            <p className="text-2xl font-bold">{stakeStats.dailyRewards} VNTH</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-vanth-dark/80 to-vanth-dark/40 backdrop-blur-sm p-6 rounded-xl border border-vanth-primary/10 hover:border-vanth-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-vanth-primary/10 rounded-lg">
                <ArrowUpRight className="text-vanth-accent" size={20} />
              </div>
              <h3 className="text-sm text-gray-400">APR</h3>
            </div>
            <p className="text-2xl font-bold">{stakeStats.apr}%</p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-vanth-dark/80 to-vanth-dark/40 backdrop-blur-sm p-6 rounded-xl border border-vanth-primary/10"
          >
            <h2 className="text-xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-vanth-primary/10 text-vanth-accent">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-1">Connect Wallet</h3>
                  <p className="text-sm text-gray-400">Connect your wallet to get started</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-vanth-primary/10 text-vanth-accent">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hold Vanth NFT</h3>
                  <p className="text-sm text-gray-400">Make sure you have Vanth NFT in your wallet</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-vanth-primary/10 text-vanth-accent">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-1">Start Earning</h3>
                  <p className="text-sm text-gray-400">Stake your NFT and earn VNTH tokens</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-vanth-accent/10 border border-vanth-accent/20">
              <p className="text-sm text-vanth-accent">
                <span className="font-medium">Coming Soon:</span> Staking feature will be available after the official launch. Stay tuned for updates!
              </p>
            </div>
          </motion.div>

          {/* Right Column - Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-vanth-dark/80 to-vanth-dark/40 backdrop-blur-sm p-6 rounded-xl border border-vanth-primary/10"
          >
            <h2 className="text-xl font-bold mb-6">Start Staking</h2>
            
            {/* Rewards Info */}
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-vanth-dark to-vanth-dark/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-vanth-primary/10 rounded-lg">
                  <Coins className="text-vanth-accent" size={20} />
                </div>
                <h3 className="text-sm text-gray-400">Future Reward Rate</h3>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-vanth-accent" size={16} />
                <p className="text-sm text-vanth-accent">Coming Soon</p>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Reward rates will be announced at launch
              </p>
            </div>

            {/* Action Button */}
            <button
              disabled
              className="w-full py-4 rounded-xl font-medium transition-all bg-gradient-to-r from-vanth-accent/50 to-vanth-primary/50 text-white/50 cursor-not-allowed"
            >
              Staking Coming Soon
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              Feature will be available after launch
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stake;