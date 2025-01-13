import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-cyan-500/20 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              VANTH NFT
            </Link>
            <p className="text-gray-400">
              Exclusive NFT collection with unique staking rewards and community benefits.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/whitelist" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors block"
                >
                  Whitelist
                </Link>
              </li>
              <li>
                <Link 
                  to="/stake" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors block"
                >
                  Stake
                </Link>
              </li>
              <li>
                <Link 
                  to="/roadmap" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors block"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/whitepaper" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors block"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <a 
                  href="https://discord.com/invite/wYdKFtEZMF" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors block"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/joinvanth" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors block"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/joinvanth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://discord.com/invite/wYdKFtEZMF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-500/20">
          <p className="text-gray-400 text-center">
            &copy; {currentYear} VANTH NFT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;