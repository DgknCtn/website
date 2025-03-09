import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-vanth-primary/5 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">About Vanth</h1>
          <div className="prose prose-invert max-w-none">
            <p>Vanth is an exclusive collection of 3333 pieces, each with premium quality. Each Vanth represents value addition, fearlessness and decentralization. It aims to be a leader in innovation, vision and success in the Web3 world.</p>
            <p>Based on the 4 elements, Vanth has created mythological stories around air, fire, earth and water and integrated it with web3 technology. Everything from the universe to our world has been created by the different forms of these four energies and technology has been created thanks to these energies. Vanth is an organization that aims to innovate, stay up to date and aim for the best, and with this vision, it is an organization that prioritizes benefiting the community. It is quite powerful compared to its competitors!</p>
            <p>Vanth owners are not just owners, they are important cornerstones of an interactive story. Vanth owners have important roles in the creation of the stories of the characters in the collection, in the development of digital content, in making important decisions within the project, and will have exclusive access to the Vanth universe.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
