import React from 'react';
import { motion } from 'motion/react';

const ExecutionSVG = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <defs>
      <linearGradient id="execGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9945FF" />
        <stop offset="100%" stopColor="#C4A6FC" />
      </linearGradient>
      <filter id="glowExec" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#9945FF" floodOpacity="0.4" />
      </filter>
    </defs>
    
    {/* Background Grid */}
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E5E5" strokeWidth="1" opacity="0.5"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />

    {/* Central Hub */}
    <motion.g
      initial={{ scale: 0.9 }}
      animate={{ scale: [0.9, 1, 0.9] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="200" cy="100" r="30" fill="#111" stroke="url(#execGrad)" strokeWidth="2" filter="url(#glowExec)" />
      <circle cx="200" cy="100" r="12" fill="#9945FF" />
    </motion.g>

    {/* Connected Nodes */}
    {[0, 72, 144, 216, 288].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 200 + Math.cos(rad) * 120;
      const y = 100 + Math.sin(rad) * 80;
      return (
        <g key={i}>
          <line x1="200" y1="100" x2={x} y2={y} stroke="#9945FF" strokeWidth="1" opacity="0.3" />
          <circle cx={x} cy={y} r="8" fill="#FFF" stroke="#111" strokeWidth="2" />
          
          {/* Traveling Packets */}
          <motion.circle
            r="4"
            fill="#9945FF"
            initial={{ cx: 200, cy: 100, opacity: 0 }}
            animate={{ 
              cx: [200, x],
              cy: [100, y],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear", 
              delay: i * 0.4 
            }}
          />
        </g>
      );
    })}
  </svg>
);

const OrchestrationSVG = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <defs>
      <linearGradient id="orchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#F0F0F0" />
      </linearGradient>
    </defs>

    {/* Pipeline Blocks */}
    <g transform="translate(50, 80)">
      {[0, 1, 2].map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0.5, y: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            y: [0, -5, 0],
            filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 1,
            ease: "easeInOut" 
          }}
        >
          <rect x={i * 100} y="0" width="80" height="40" rx="8" fill="url(#orchGrad)" stroke="#111" strokeWidth="1" />
          <rect x={i * 100 + 10} y="15" width="60" height="4" rx="2" fill="#9945FF" opacity="0.2" />
          <rect x={i * 100 + 10} y="25" width="40" height="4" rx="2" fill="#9945FF" opacity="0.2" />
          
          {/* Connecting Arrow */}
          {i < 2 && (
            <path d={`M${i * 100 + 85},20 L${i * 100 + 95},20`} stroke="#9945FF" strokeWidth="2" markerEnd="url(#arrow)" />
          )}
        </motion.g>
      ))}
    </g>

    {/* Status Indicators */}
    <motion.g transform="translate(50, 140)">
       {[0, 1, 2].map((i) => (
         <motion.circle
            key={i}
            cx={i * 100 + 40}
            cy="0"
            r="6"
            fill="#9945FF"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
         />
       ))}
    </motion.g>
  </svg>
);

const RiskSVG = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <defs>
      <filter id="shieldGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#9945FF" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Incoming Data Stream (Threats) */}
    {[0, 1, 2, 3].map((i) => (
      <motion.rect
        key={i}
        x="0"
        y={60 + i * 25}
        width="20"
        height="4"
        fill="#111"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: [0, 180], opacity: [0, 1, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: i * 0.5,
          ease: "linear" 
        }}
      />
    ))}

    {/* Shield */}
    <motion.g
      transform="translate(200, 100)"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path 
        d="M0,-60 C40,-60 60,-20 60,0 C60,40 40,80 0,90 C-40,80 -60,40 -60,0 C-60,-20 -40,-60 0,-60 Z" 
        fill="#FFFFFF" 
        stroke="#9945FF" 
        strokeWidth="3"
        filter="url(#shieldGlow)"
      />
      <path 
        d="M0,-40 L0,70 M-30,0 L30,0" 
        stroke="#9945FF" 
        strokeWidth="2" 
        strokeLinecap="round" 
        opacity="0.2"
      />
      <circle cx="0" cy="0" r="15" fill="#9945FF" />
      <path d="M-5,0 L0,5 L5,-5" stroke="#FFF" strokeWidth="2" fill="none" />
    </motion.g>
  </svg>
);

const ObservabilitySVG = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <defs>
      <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9945FF" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#9945FF" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Dashboard Frame */}
    <rect x="50" y="30" width="300" height="140" rx="12" fill="#FFF" stroke="#E5E5E5" strokeWidth="1" />
    
    {/* Header */}
    <rect x="50" y="30" width="300" height="30" rx="12" fill="#FAFAFA" />
    <circle cx="70" cy="45" r="4" fill="#FF5F56" />
    <circle cx="85" cy="45" r="4" fill="#FFBD2E" />
    <circle cx="100" cy="45" r="4" fill="#27C93F" />

    {/* Line Chart */}
    <g transform="translate(70, 80)">
      <motion.path
        d="M0,50 L20,40 L40,45 L60,20 L80,30 L100,10 L120,25 L140,5"
        fill="none"
        stroke="#9945FF"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <path d="M0,50 L20,40 L40,45 L60,20 L80,30 L100,10 L120,25 L140,5 V60 H0 Z" fill="url(#chartFill)" />
    </g>

    {/* Bar Chart */}
    <g transform="translate(240, 80)">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect
          key={i}
          x={i * 15}
          y="0"
          width="10"
          height="50"
          fill="#111"
          opacity="0.8"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0.2, 0.8, 0.4, 1, 0.6][i] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.1
          }}
          style={{ transformOrigin: 'bottom' }}
        />
      ))}
    </g>
  </svg>
);

const CollaborationSVG = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    {/* Connection Lines */}
    <g stroke="#9945FF" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
      <line x1="200" y1="60" x2="140" y2="140" />
      <line x1="200" y1="60" x2="260" y2="140" />
      <line x1="140" y1="140" x2="260" y2="140" />
    </g>

    {/* Nodes */}
    {[
      { x: 200, y: 60, delay: 0 },
      { x: 140, y: 140, delay: 1 },
      { x: 260, y: 140, delay: 2 }
    ].map((node, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: node.delay }}
      >
        <circle cx={node.x} cy={node.y} r="24" fill="#FFF" stroke="#111" strokeWidth="2" />
        <circle cx={node.x} cy={node.y - 5} r="8" fill="#111" />
        <path d={`M${node.x - 10},${node.y + 15} Q${node.x},${node.y + 5} ${node.x + 10},${node.y + 15}`} fill="none" stroke="#111" strokeWidth="2" />
        
        {/* Active Indicator */}
        <motion.circle
          cx={node.x + 18}
          cy={node.y - 18}
          r="6"
          fill="#9945FF"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.g>
    ))}
  </svg>
);

const VersioningSVG = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <defs>
      <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#111" />
      </marker>
    </defs>

    {/* Commit Line */}
    <line x1="100" y1="100" x2="300" y2="100" stroke="#111" strokeWidth="2" />
    
    {/* Branch Line */}
    <path d="M180,100 C200,100 200,60 220,60 L260,60" fill="none" stroke="#9945FF" strokeWidth="2" strokeDasharray="4 4" />

    {/* Commits */}
    {[
      { x: 140, y: 100, color: "#111", delay: 0 },
      { x: 180, y: 100, color: "#111", delay: 1 },
      { x: 220, y: 60, color: "#9945FF", delay: 2 }, // Branch commit
      { x: 260, y: 100, color: "#111", delay: 3 },
    ].map((commit, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: commit.delay }}
      >
        <circle cx={commit.x} cy={commit.y} r="10" fill="#FFF" stroke={commit.color} strokeWidth="2" />
        <circle cx={commit.x} cy={commit.y} r="4" fill={commit.color} />
      </motion.g>
    ))}
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const FeatureCard = ({ title, description, SVGComponent, className, horizontal }: { title: string, description: string, SVGComponent: React.FC, className?: string, horizontal?: boolean }) => (
  <motion.div 
    variants={cardVariants}
    className={`bg-[#FAFAFA] rounded-[2.5rem] p-8 md:p-10 flex ${horizontal ? 'flex-col md:flex-row items-center text-left' : 'flex-col items-center text-center'} border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative ${className || ''}`}
  >
    {horizontal ? (
      <>
        <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0 relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h3>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-[280px] md:max-w-md">
            {description}
          </p>
        </div>
        <div className="w-full md:w-1/2 h-48 md:h-64 relative z-0 flex items-center justify-center">
          <SVGComponent />
        </div>
      </>
    ) : (
      <>
        <div className="w-full h-48 mb-8 relative z-0 flex items-center justify-center">
          <SVGComponent />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h3>
          <p className="text-gray-500 text-base leading-relaxed max-w-[280px]">
            {description}
          </p>
        </div>
      </>
    )}
  </motion.div>
);

export const GridFeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const features = [
    {
      title: "Execution Layer & Connectors",
      description: "Unified execution API that routes orders to CEXs, DEXs, and proprietary gateways with smart order routing.",
      SVGComponent: ExecutionSVG,
      className: "md:col-span-2",
      horizontal: true
    },
    {
      title: "Orchestration & Scheduling",
      description: "Coordinate multi-strategy workflows, lifecycle hooks, and recovery policies.",
      SVGComponent: OrchestrationSVG,
      className: "md:col-span-1",
      horizontal: false
    },
    {
      title: "Risk Manager & Compliance",
      description: "Real-time position limits, pre-trade checks, circuit breakers, and immutable audit trails.",
      SVGComponent: RiskSVG,
      className: "md:col-span-1",
      horizontal: false
    },
    {
      title: "Observability Dashboard",
      description: "P&L, latency, fill quality, signal health, and alerting in one pane.",
      SVGComponent: ObservabilitySVG,
      className: "md:col-span-2",
      horizontal: true
    },
    {
      title: "Team Collaboration",
      description: "Role-based permissions, shared libraries, and strategy review pipelines.",
      SVGComponent: CollaborationSVG,
      className: "md:col-span-2",
      horizontal: true
    },
    {
      title: "Versioning & Reproducibility",
      description: "Immutable strategy snapshots, data provenance, and deterministic run metadata.",
      SVGComponent: VersioningSVG,
      className: "md:col-span-1",
      horizontal: false
    }
  ];

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
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Key Features</h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
          Built for collaboration, observability, and robust risk controls, Pilotify fits teams that need speed without sacrificing safety.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            SVGComponent={feature.SVGComponent}
            className={feature.className}
            horizontal={feature.horizontal}
          />
        ))}
      </motion.div>
    </section>
  );
};
