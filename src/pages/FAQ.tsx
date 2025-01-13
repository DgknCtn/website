import React from 'react';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-vanth-primary/5 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">FAQ</h1>
          <div className="space-y-6">
            {/* FAQ içeriği buraya eklenecek */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ; 