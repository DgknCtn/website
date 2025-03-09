import React from 'react';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-vanth-primary/5 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Our Vision</h1>
          <div className="prose prose-invert max-w-none">
          <p>Our vision is primarily to ensure permanence and continuous growth. The Vanth ecosystem will move forward in the strategy of becoming a well-established project by developing the NFT collection, token and game project and useful applications supported by artificial intelligence. In doing so, we will work with other proven web3 projects and make partnership agreements to provide more benefits. </p>
            <p>Price stability, innovation and staying up-to-date in the evolving web3 world are other top priorities.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision; 