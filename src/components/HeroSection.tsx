import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Zap, Smartphone, Layers, Server } from 'lucide-react';

interface HeroSectionProps {
  onStartBuilding: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartBuilding }) => {
  return (
    <section className="relative pt-12 pb-14 md:pt-16 md:pb-20 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6"
        >
          AI-Powered Blueprints
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Outfit',sans-serif] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white max-w-3xl"
        >
          Turn Your Idea <br className="hidden sm:inline" />
          Into an{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            App.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed"
        >
          Describe your app idea in one sentence, and BodhX will generate a simple app blueprint instantly.
        </motion.p>

        {/* Start Building Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            id="start-building-hero-btn"
            onClick={onStartBuilding}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl shadow-blue-900/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-blue-200 group-hover:rotate-12 transition-transform duration-300" />
              <span>Start Building</span>
              <ArrowDown className="w-4 h-4 text-purple-200 group-hover:translate-y-0.5 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>

        {/* Feature quick badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl text-left"
        >
          <div className="p-3 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center gap-2.5">
            <Smartphone className="w-4 h-4 text-blue-400 shrink-0" />
            <div className="text-xs text-slate-300 font-medium">Core Screens</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="text-xs text-slate-300 font-medium">Key Features</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center gap-2.5">
            <Server className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-xs text-slate-300 font-medium">Tech Stack</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-pink-400 shrink-0" />
            <div className="text-xs text-slate-300 font-medium">Architecture</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
