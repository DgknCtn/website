import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import vanthLogo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Stake', path: '/stake' },
    { title: 'Whitelist Control', path: '/whitelist-checker' },
    {
      title: 'About',
      submenu: [
        { title: 'About Us', path: '/about' },
        { title: 'Vision', path: '/vision' },
        { title: 'Story', path: '/story' },
        { title: 'FAQ', path: '/faq' },
      ],
    },
  ];

  const MenuContent = () => (
    <div className="space-y-2">
      {menuItems.map((item, index) => (
        'submenu' in item ? (
          <div key={index} className="py-2">
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center justify-between w-full text-white py-2"
            >
              <span>{item.title}</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  isAboutOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <AnimatePresence>
              {isAboutOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4"
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block text-white hover:text-vanth-primary py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            key={index}
            to={item.path}
            className="block text-white hover:text-vanth-primary py-2"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
        )
      ))}
    </div>
  );

  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20 relative">
          {/* Menu Button - Left */}
          <div className="w-28">
            {/* Boş div, logo ortalamak için */}
          </div>

          {/* Logo - Center */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img src={vanthLogo} alt="Vanth Logo" className="h-8 md:h-10" />
          </Link>

          {/* Menu Button - Right */}
          <button
            className="text-white hover:text-vanth-primary transition-colors w-28 flex justify-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="fixed top-0 right-0 h-full w-72 bg-black/95 backdrop-blur-md shadow-lg"
            >
              <div className="p-6">
                {/* Close Button */}
                <button
                  className="absolute top-7 right-6 text-white hover:text-vanth-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>

                {/* Logo */}
                <Link to="/" className="flex items-center mb-12 mt-4">
                  <img src={vanthLogo} alt="Vanth Logo" className="h-8 md:h-10" />
                </Link>

                <MenuContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;