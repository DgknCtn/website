import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import Roadmap from '../components/Roadmap';
import logo from '../assets/logo.png';
import xLogo from '../assets/x-logo.png';
import discordLogo from '../assets/discord-logo.png';
import bookLogo from '../assets/book-logo.png';
import vanthLogo from '../assets/vanth.png';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-vanth-primary/5 to-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <motion.img 
            src={vanthLogo}
            alt="Vanth Logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 md:w-96 mb-8 mx-auto"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4 mb-12"
          >
            <a
              href="https://discord.com/invite/wYdKFtEZMF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-vanth-primary transition-colors"
            >
              <img 
                src={discordLogo} 
                alt="Discord" 
                width={24} 
                height={24} 
                className="brightness-100 hover:brightness-100 hover:filter hover:invert-[0.4] hover:sepia hover:saturate-[10000%] hover:hue-rotate-[320deg] transition-all" 
              />
            </a>
            <a
              href="https://x.com/joinvanth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-vanth-primary transition-colors"
            >
              <img 
                src={xLogo} 
                alt="X (Twitter)" 
                width={24} 
                height={24} 
                className="brightness-100 hover:brightness-100 hover:filter hover:invert-[0.4] hover:sepia hover:saturate-[10000%] hover:hue-rotate-[320deg] transition-all" 
              />
            </a>
            <a
              href="https://vanth.gitbook.io/vanth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-vanth-primary transition-colors"
            >
              <img 
                src={bookLogo} 
                alt="GitBook" 
                width={24} 
                height={24} 
                className="brightness-100 hover:brightness-100 hover:filter hover:invert-[0.4] hover:sepia hover:saturate-[10000%] hover:hue-rotate-[320deg] transition-all" 
              />
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-vanth-accent"
          >
            ↓ Scroll to explore
          </motion.div>
        </div>
      </section>

      {/* What is Vanth Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">What is Vanth?</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Vanth is a web3 focused project inspired by the best with an innovative and dynamic style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Vanth Gallery</h2>
            <p className="text-lg text-gray-400">Discover our unique NFT collection</p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Roadmap Section */}
      <Roadmap />

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Be part of something special. The Vanth community is a place where artists, collectors, and enthusiasts
              come together to shape the future of digital art. Connect with like-minded individuals and participate
              in exclusive events and decisions.
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://discord.com/invite/wYdKFtEZMF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-vanth-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={discordLogo} 
                  alt="Discord" 
                  width={32} 
                  height={32} 
                  className="brightness-100 hover:brightness-100 hover:filter hover:invert-[0.4] hover:sepia hover:saturate-[10000%] hover:hue-rotate-[320deg] transition-all" 
                />
              </motion.a>
              <motion.a
                href="https://x.com/joinvanth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-vanth-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={xLogo} 
                  alt="X (Twitter)" 
                  width={32} 
                  height={32} 
                  className="brightness-100 hover:brightness-100 hover:filter hover:invert-[0.4] hover:sepia hover:saturate-[10000%] hover:hue-rotate-[320deg] transition-all" 
                />
              </motion.a>
              <motion.a
                href="https://vanth.gitbook.io/vanth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-vanth-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={bookLogo} 
                  alt="GitBook" 
                  width={32} 
                  height={32} 
                  className="brightness-100 hover:brightness-100 hover:filter hover:invert-[0.4] hover:sepia hover:saturate-[10000%] hover:hue-rotate-[320deg] transition-all" 
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-8 text-center text-gray-400 text-sm">
        2024 Vanth. All rights reserved
      </div>
    </div>
  );
};

export default Home;