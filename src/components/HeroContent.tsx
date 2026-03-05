import React from 'react';
import { motion } from 'motion/react';
import { Solana3D } from './Solana3D';
import { Logo } from './Logo';

export const HeroContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center mt-4 md:mt-8 relative z-10 w-full max-w-4xl mx-auto px-4"
    >
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/50 backdrop-blur-md border border-white/80 rounded-full px-5 py-2 flex flex-wrap justify-center items-center gap-2 md:gap-3 shadow-sm mb-6 md:mb-8"
      >
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-800 uppercase text-center">
          Powered By
        </span>
        <div className="flex items-center gap-1.5">
          {/* Pilotify Logo */}
          <Logo className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.1em] text-black">SOLANA</span>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-4 md:mb-6 relative z-20 px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111] mb-4 leading-[1.1]">
          From Idea to Market
        </h1>
        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          The full lifecycle platform for strategy-first trading.
        </p>
      </motion.div>

      {/* 3D Object */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[220px] md:max-w-[320px] aspect-square flex items-center justify-center mb-6 md:mb-8"
      >
        <Solana3D />
      </motion.div>

      {/* Value Proposition */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center relative z-20 px-4 max-w-3xl mx-auto"
      >
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Pilotify collapses the strategy lifecycle from research to live in one auditable platform - accelerating time-to-market while maintaining rigorous risk and compliance controls. Build faster, iterate safer, and operate strategies with full transparency and confidence.
        </p>
      </motion.div>
    </motion.div>
  );
};

