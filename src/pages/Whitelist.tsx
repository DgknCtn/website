import React, { useState } from 'react';
import axios from '../lib/axios';
import { motion } from 'framer-motion';

const Whitelist: React.FC = () => {
  const [formData, setFormData] = useState({
    walletAddress: '',
    discordUsername: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Ethereum wallet address validation
  const isValidEthereumAddress = (address: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  // Discord username validation - Discord tag is optional
  const isValidDiscordUsername = (username: string) => {
    return /^.{2,32}(#[0-9]{4})?$/.test(username);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Form validation
    if (!isValidEthereumAddress(formData.walletAddress)) {
      setError('Please enter a valid Ethereum wallet address (42 characters starting with 0x)');
      return;
    }

    if (!isValidDiscordUsername(formData.discordUsername)) {
      setError('Please enter a valid Discord username');
      return;
    }

    setLoading(true);

    try {
      await axios.post('/whitelist', formData);
      setSuccess(true);
      setFormData({ walletAddress: '', discordUsername: '' });
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.response?.status === 409) {
        setError('This wallet address or Discord username is already registered');
      } else {
        setError('An error occurred while registering. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Whitelist Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-300 mb-2">
              Ethereum Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-cyan-500/20 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              placeholder="0x..."
            />
          </div>

          <div>
            <label htmlFor="discordUsername" className="block text-sm font-medium text-gray-300 mb-2">
              Discord Username
            </label>
            <input
              type="text"
              id="discordUsername"
              name="discordUsername"
              value={formData.discordUsername}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-cyan-500/20 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              placeholder="Username#1234"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 rounded-lg bg-red-500/20 border border-red-500/40 text-red-200 text-sm"
            >
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 rounded-lg bg-green-500/20 border border-green-500/40 text-green-200 text-sm"
            >
              Successfully registered to whitelist!
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white 
              ${loading
                ? 'bg-cyan-600/50 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transform hover:scale-[1.02] transition-all'
              }`}
          >
            {loading ? 'Processing...' : 'Join Whitelist'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Whitelist;