import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Card1SVG = () => (
  <motion.svg viewBox="0 0 400 300" className="absolute bottom-0 left-0 w-full h-auto translate-y-[10%]">
    <defs>
      <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.1" />
      </filter>
    </defs>
    <motion.g
      initial={{ y: 20 }}
      animate={{ y: [20, 0, 20] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Code Window */}
      <rect x="40" y="80" width="260" height="180" rx="12" fill="#111111" filter="url(#shadow1)" />
      <circle cx="60" cy="100" r="4" fill="#333" />
      <circle cx="75" cy="100" r="4" fill="#333" />
      <circle cx="90" cy="100" r="4" fill="#333" />
      <rect x="60" y="120" width="120" height="6" rx="3" fill="#9945FF" opacity="0.8" />
      <rect x="60" y="140" width="180" height="6" rx="3" fill="#FFF" opacity="0.2" />
      <rect x="60" y="160" width="140" height="6" rx="3" fill="#FFF" opacity="0.2" />
      <rect x="60" y="180" width="160" height="6" rx="3" fill="#FFF" opacity="0.2" />

      {/* Node Graph Window */}
      <motion.g
        initial={{ x: 20 }}
        animate={{ x: [20, 10, 20] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="180" y="120" width="180" height="160" rx="12" fill="#FFFFFF" filter="url(#shadow1)" stroke="#E5E5E5" strokeWidth="1" />
        <path d="M220,160 Q250,160 250,190 T280,190" fill="none" stroke="#9945FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M280,190 Q310,190 310,220 T340,220" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        <circle cx="220" cy="160" r="8" fill="#9945FF" />
        <circle cx="280" cy="190" r="8" fill="#111111" />
        <circle cx="340" cy="220" r="8" fill="#9945FF" />
      </motion.g>
    </motion.g>
  </motion.svg>
);

const Card2SVG = () => (
  <motion.svg viewBox="0 0 400 300" className="absolute bottom-0 left-0 w-full h-auto translate-y-[15%]">
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9945FF" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#9945FF" stopOpacity="0" />
      </linearGradient>
      <filter id="glowChart" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#9945FF" floodOpacity="0.6" />
      </filter>
    </defs>
    <motion.g
      initial={{ y: 10 }}
      animate={{ y: [10, -5, 10] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Chart Grid */}
      <path d="M40,200 L360,200 M40,150 L360,150 M40,100 L360,100" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Chart Line */}
      <motion.path 
        d="M40,180 C100,180 120,120 180,140 C240,160 280,80 360,60" 
        fill="none" 
        stroke="#9945FF" 
        strokeWidth="4" 
        strokeLinecap="round" 
        filter="url(#glowChart)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      {/* Chart Area */}
      <path d="M40,180 C100,180 120,120 180,140 C240,160 280,80 360,60 L360,250 L40,250 Z" fill="url(#chartGrad)" />

      {/* Data Points */}
      <circle cx="180" cy="140" r="6" fill="#FFF" />
      <circle cx="360" cy="60" r="6" fill="#FFF" filter="url(#glowChart)" />
      
      {/* Floating UI Element */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <rect x="240" y="40" width="80" height="30" rx="8" fill="#111" stroke="#333" strokeWidth="1" />
        <text x="280" y="59" fill="#FFF" fontSize="12" fontWeight="bold" textAnchor="middle">+24.5%</text>
      </motion.g>
    </motion.g>
  </motion.svg>
);

const Card3SVG = () => (
  <motion.svg viewBox="0 0 400 300" className="absolute bottom-0 left-0 w-full h-auto translate-y-[10%]">
    <defs>
      <linearGradient id="boxTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="boxLeft" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="boxRight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    
    <motion.g
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Sandbox Container */}
      <g transform="translate(200, 180) scale(1.8)">
        {/* Back walls */}
        <polygon points="0,-40 35,-20 0,0 -35,-20" fill="none" stroke="#FFF" strokeWidth="1" opacity="0.3" />
        
        {/* Inside elements (floating) */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="0" cy="-15" r="8" fill="#111" />
          <path d="M-15,-5 L-5,-15 L5,-5" fill="none" stroke="#111" strokeWidth="2" />
        </motion.g>

        {/* Front walls */}
        <polygon points="-35,-20 0,0 0,40 -35,20" fill="url(#boxLeft)" />
        <polygon points="0,0 35,-20 35,20 0,40" fill="url(#boxRight)" />
        <polygon points="0,-40 35,-20 0,0 -35,-20" fill="url(#boxTop)" opacity="0.2" />
      </g>
      
      {/* Floating UI */}
      <motion.g 
        transform="translate(100, 100)"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <rect x="0" y="0" width="80" height="40" rx="8" fill="#FFF" opacity="0.9" />
        <rect x="10" y="10" width="40" height="6" rx="3" fill="#111" />
        <rect x="10" y="24" width="60" height="6" rx="3" fill="#9945FF" />
      </motion.g>
    </motion.g>
  </motion.svg>
);

const Card4SVG = () => (
  <motion.svg viewBox="0 0 400 300" className="absolute bottom-0 left-0 w-full h-auto translate-y-[20%]">
    <defs>
      <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E5E5E5" />
      </linearGradient>
      <filter id="glowRocket" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#9945FF" floodOpacity="0.4" />
      </filter>
    </defs>
    
    <motion.g
      initial={{ y: 20 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Cloud Nodes */}
      <g stroke="#333" strokeWidth="2" fill="none">
        <path d="M100,200 Q150,150 200,200 T300,200" strokeDasharray="4 4" />
        <circle cx="100" cy="200" r="20" fill="#1A1A1A" />
        <circle cx="200" cy="200" r="20" fill="#1A1A1A" />
        <circle cx="300" cy="200" r="20" fill="#1A1A1A" />
        <circle cx="100" cy="200" r="6" fill="#9945FF" />
        <circle cx="200" cy="200" r="6" fill="#9945FF" />
        <circle cx="300" cy="200" r="6" fill="#9945FF" />
      </g>

      {/* Rocket / Deploy Package */}
      <motion.g
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [-20, -50, -20], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M180,120 L200,80 L220,120 L200,140 Z" fill="url(#rocketGrad)" filter="url(#glowRocket)" />
        <path d="M190,120 L180,140 L200,130 Z" fill="#9945FF" />
        <path d="M210,120 L220,140 L200,130 Z" fill="#9945FF" />
        {/* Thrust */}
        <motion.path 
          d="M195,140 L200,160 L205,140 Z" 
          fill="#9945FF" 
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.g>
    </motion.g>
  </motion.svg>
);

export const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const features = [
    {
      title: "Strategy Studio",
      description: "Visual + code-native workspace for sketching, composing, and versioning strategies.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 18L22 12L16 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L2 12L8 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bg: "bg-white",
      iconBg: "bg-[#111]",
      titleColor: "text-gray-900",
      descColor: "text-gray-500",
      Svg: Card1SVG
    },
    {
      title: "Backtest & Simulation",
      description: "Fast, reproducible historical and scenario simulations with slippage, latency, and fee models.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3v18h18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 9l-5 5-4-4-5 5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bg: "bg-[#111111]",
      iconBg: "bg-[#9945FF]",
      titleColor: "text-white",
      descColor: "text-gray-400",
      Svg: Card2SVG,
      shadow: "shadow-xl"
    },
    {
      title: "Paper Trading Sandbox",
      description: "Realistic dry-run environments that mirror live exchange behavior.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#9945FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="#9945FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22.08V12" stroke="#9945FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bg: "bg-[#9945FF]",
      iconBg: "bg-white",
      titleColor: "text-white",
      descColor: "text-white/80",
      Svg: Card3SVG
    },
    {
      title: "One-Click Deployment",
      description: "Package and deploy strategies to live executors across venues and clouds with a single action.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15l-3-3a22 22 0 0 1 3.82-13.82 1.5 1.5 0 0 1 2.18 2.18A22 22 0 0 1 12 15z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l-3 3a22 22 0 0 0 13.82 3.82 1.5 1.5 0 0 0-2.18-2.18A22 22 0 0 0 9 12z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bg: "bg-[#0B0D10]",
      iconBg: "bg-[#9945FF]",
      titleColor: "text-white",
      descColor: "text-gray-400",
      Svg: Card4SVG
    }
  ];

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const FeatureCard = ({ feature }: { feature: any }) => {
    const Svg = feature.Svg;
    return (
      <div className={`${feature.bg} rounded-[2.5rem] p-8 md:p-14 flex flex-col relative overflow-hidden h-[450px] md:h-[600px] ${feature.shadow || 'shadow-sm'} w-full`}>
        <div className="relative z-10">
          <div className={`w-14 h-14 md:w-16 md:h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 md:mb-8 ${feature.iconBg === 'bg-white' ? 'shadow-sm' : ''}`}>
            {feature.icon}
          </div>
          <h3 className={`text-2xl md:text-4xl font-bold ${feature.titleColor} mb-3 md:mb-4 tracking-tight`}>{feature.title}</h3>
          <p className={`${feature.descColor} text-base md:text-lg leading-relaxed max-w-md`}>
            {feature.description}
          </p>
        </div>
        <Svg />
      </div>
    );
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-24 relative z-20">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 md:mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">What is Pilotify</h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
          Pilotify is a unified platform that helps traders, quants, and trading teams design, validate, and operate strategy-first trading systems - all in one place.
        </p>
      </motion.div>

      {/* Mobile Controls */}
      <div className="flex justify-end items-center mb-6 md:hidden">
        <div className="flex gap-2">
          <button onClick={prev} className="p-3 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button onClick={next} className="p-3 rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile View (Carousel) */}
      <div className="block md:hidden relative overflow-hidden rounded-[2.5rem]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <FeatureCard feature={features[currentIndex]} />
          </motion.div>
        </AnimatePresence>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-[#9945FF]' : 'w-1.5 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View (Grid) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="hidden md:grid md:grid-cols-2 gap-6"
      >
        {features.map((feature, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};
