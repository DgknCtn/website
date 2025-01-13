import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const nfts = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: `/images/image${i + 1}.png`
  }));

  return (
    <div className="py-12 space-y-8 overflow-hidden">
      {/* Üst şerit - Sağa kayan */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="flex gap-8 w-max"
        >
          {[...nfts, ...nfts, ...nfts].map((nft, index) => (
            <motion.div
              key={`${nft.id}-${index}`}
              className="flex-none w-[300px] rounded-lg overflow-hidden bg-[#1A1A1A]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={nft.image} alt={`NFT ${nft.id}`} className="w-full h-[300px] object-cover hover:opacity-90 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Alt şerit - Sola kayan */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "linear"
          }}
          className="flex gap-8 w-max"
        >
          {[...nfts.reverse(), ...nfts, ...nfts].map((nft, index) => (
            <motion.div
              key={`${nft.id}-${index}-bottom`}
              className="flex-none w-[300px] rounded-lg overflow-hidden bg-[#1A1A1A]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={nft.image} alt={`NFT ${nft.id}`} className="w-full h-[300px] object-cover hover:opacity-90 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
