import React, { useState, useEffect } from 'react';
import axios from '../lib/axios';
import { motion } from 'framer-motion';

const Admin: React.FC = () => {
  const [whitelistEntries, setWhitelistEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWhitelistEntries();
  }, []);

  const fetchWhitelistEntries = async () => {
    try {
      const response = await axios.get('/api/whitelist/all');
      setWhitelistEntries(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch whitelist entries');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-cyan-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Admin Panel
        </h1>

        {error && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
            {error}
          </div>
        )}

        <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-cyan-500/20 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">Whitelist Entries</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-cyan-500/20">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Wallet Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Discord Username</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyan-500/10">
                  {whitelistEntries.map((entry) => (
                    <tr key={entry.id} className="hover:bg-cyan-500/5 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{entry.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{entry.wallet_address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{entry.discord_username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(entry.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {whitelistEntries.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No entries found
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Admin;
