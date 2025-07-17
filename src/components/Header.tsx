import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Vanth Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation - Centered */}
          <nav className="flex-1 flex justify-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/stake"
              className="text-white hover:text-cyan-400 transition-colors px-3 py-2"
            >
              Stake
            </Link>
            <Link
              to="/roadmap"
              className="text-white hover:text-cyan-400 transition-colors px-3 py-2"
            >
              Roadmap
            </Link>
            <Link
              to="/whitepaper"
              className="text-white hover:text-cyan-400 transition-colors px-3 py-2"
            >
              Whitepaper
            </Link>
            <Link
              to="/whitelist"
              className="text-white hover:text-cyan-400 transition-colors px-3 py-2"
            >
              Whitelist
            </Link>
          </nav>

          {/* Empty div for spacing */}
          <div className="flex-shrink-0 w-[100px]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
