import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16 border-t border-white/[0.05] bg-[#020617] py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">B</span>
          </div>
          <span className="font-semibold text-slate-400 font-['Outfit',sans-serif]">
            BodhX Blueprint Architect
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400">Turn your ideas into apps instantly</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline text-slate-500">Crafted with precision</span>
        </div>
      </div>
    </footer>
  );
};
