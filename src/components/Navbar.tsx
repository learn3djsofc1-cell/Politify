import React, { useState } from 'react';
import { Wallet, Menu, X, Rocket, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Engine', href: '#engine' },
    { name: 'Docs', href: '#docs' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      <nav className="w-full max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight">Pilotify</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center bg-white/40 backdrop-blur-md border border-white/60 rounded-full px-2 py-1.5 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors rounded-full hover:bg-white/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-[#111] hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition-transform hover:scale-105">
            Launch App
            <Rocket className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-black"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-800 hover:text-[#9945FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-auto mb-12">
              <button className="w-full bg-[#111] text-white px-6 py-4 rounded-xl text-lg font-medium flex items-center justify-center gap-2">
                Launch App
                <Rocket className="w-5 h-5" />
              </button>
              <button className="w-full bg-white border border-gray-200 text-gray-900 px-6 py-4 rounded-xl text-lg font-medium flex items-center justify-center gap-2">
                Documentation
                <BookOpen className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
