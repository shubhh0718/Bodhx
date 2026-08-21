import React from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';

interface NavbarProps {
  onReset: () => void;
  hasBlueprint: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onReset, hasBlueprint }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#020617]/70 border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          id="bodhx-brand-logo"
          onClick={onReset}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-lg leading-none">B</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-['Outfit',sans-serif]">
              BodhX
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
              AI Blueprint
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          {hasBlueprint && (
            <button
              id="reset-blueprint-btn"
              onClick={onReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-800 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all border border-slate-700 cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Idea</span>
            </button>
          )}

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/[0.06] text-xs font-medium text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">Engine Ready</span>
            <span className="sm:hidden">Ready</span>
          </div>
        </div>
      </div>
    </header>
  );
};
