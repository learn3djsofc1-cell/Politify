import React from 'react';
import { motion } from 'motion/react';

const QuantSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="quantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#9945FF" />
      </linearGradient>
    </defs>
    <motion.path
      d="M40,100 Q70,50 100,100 T160,100"
      fill="none"
      stroke="url(#quantGrad)"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle cx="40" cy="100" r="4" fill="#FFF" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="100" cy="100" r="4" fill="#9945FF" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
    <motion.circle cx="160" cy="100" r="4" fill="#FFF" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
    
    {/* Background Grid */}
    <path d="M40,140 L160,140 M40,60 L160,60" stroke="#FFF" strokeWidth="1" opacity="0.1" />
  </svg>
);

const PropSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <motion.path
      d="M100,40 L120,90 L160,90 L90,160 L100,110 L60,110 Z"
      fill="none"
      stroke="#9945FF"
      strokeWidth="3"
      strokeLinejoin="round"
      initial={{ pathLength: 0, fill: "rgba(153, 69, 255, 0)" }}
      animate={{ pathLength: 1, fill: "rgba(153, 69, 255, 0.2)" }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.circle 
      cx="100" cy="100" r="50" 
      stroke="#FFF" strokeWidth="1" opacity="0.2" 
      animate={{ scale: [1, 1.2], opacity: [0.2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

const DaoSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <g transform="translate(100, 100)">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.g key={i} transform={`rotate(${angle}) translate(0, -40)`}>
          <circle r="6" fill="#FFF" opacity="0.8" />
          <motion.line 
            x1="0" y1="0" x2="0" y2="40" 
            stroke="#9945FF" strokeWidth="2" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
        </motion.g>
      ))}
      <circle r="15" fill="#9945FF" />
    </g>
  </svg>
);

const TraderSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <rect x="50" y="60" width="100" height="70" rx="4" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.8" />
    <path d="M50,130 L150,130 L160,145 L40,145 Z" fill="#9945FF" opacity="0.3" />
    <motion.rect 
      x="60" y="70" width="30" height="40" rx="2" fill="#9945FF" 
      animate={{ height: [40, 20, 40] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.rect 
      x="110" y="80" width="30" height="30" rx="2" fill="#FFF" opacity="0.5"
      animate={{ height: [30, 50, 30], y: [80, 60, 80] }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
    />
  </svg>
);

const SecuritySVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <motion.path
      d="M100,50 L140,70 V110 C140,140 100,160 100,160 C100,160 60,140 60,110 V70 Z"
      fill="none"
      stroke="#FFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ stroke: ["#FFF", "#9945FF", "#FFF"] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.path
      d="M90,100 L100,110 L120,90"
      fill="none"
      stroke="#9945FF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
    />
  </svg>
);

const InstitutionSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <rect x="60" y="140" width="80" height="10" fill="#FFF" opacity="0.5" />
    <rect x="70" y="130" width="60" height="10" fill="#FFF" opacity="0.5" />
    <path d="M60,80 L100,50 L140,80" fill="none" stroke="#9945FF" strokeWidth="3" />
    {[70, 90, 110, 130].map((x, i) => (
      <motion.rect
        key={i}
        x={x} y="80" width="6" height="50" fill="#FFF" opacity="0.8"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: i * 0.2 }}
      />
    ))}
  </svg>
);

const cards = [
  {
    title: "Quant Research Teams",
    description: "Building systematic strategies.",
    icon: QuantSVG,
  },
  {
    title: "Prop Trading Desks",
    description: "Need safe, fast deployment.",
    icon: PropSVG,
  },
  {
    title: "Crypto DAOs or Funds",
    description: "Seeking reproducible strategy ops.",
    icon: DaoSVG,
  },
  {
    title: "Independent Traders",
    description: "Want enterprise-grade tooling without the ops burden.",
    icon: TraderSVG,
  },
  {
    title: "Architecture & Security",
    description: "Security-first design includes encrypted key management.",
    icon: SecuritySVG,
  },
  {
    title: "Institutional Asset Managers",
    description: "Scalable infrastructure for high-volume portfolio rebalancing.",
    icon: InstitutionSVG,
  }
];

export const CommunitySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full py-24 relative overflow-hidden bg-[#050505]">
      {/* Dynamic Solana Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(153, 69, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(20, 241, 149, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(0, 194, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(153, 69, 255, 0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0"
        />
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#9945FF] rounded-full blur-[120px] opacity-20 mix-blend-screen"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#14F195] rounded-full blur-[140px] opacity-10 mix-blend-screen"
        />
         <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00C2FF] rounded-full blur-[100px] opacity-15 mix-blend-screen"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] max-w-2xl tracking-tight">
            Ideal Users
          </h2>
          <div className="pl-6 border-l-2 border-[#9945FF] max-w-md">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Pilotify is designed as a modular, cloud-native system with optional on-prem or self-hosted deployments for sensitive trading operations.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative h-[280px] rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#9945FF]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#C4A6FC] transition-colors">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
