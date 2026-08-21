import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Copy,
  Check,
  Download,
  Share2,
  Users,
  Target,
  Smartphone,
  Layers,
  Code2,
  Database,
  Server,
  Cloud,
  CheckCircle2,
  LogIn,
  Home,
  User,
  Settings,
  ChevronRight,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  RotateCw,
  ExternalLink,
} from 'lucide-react';
import { AppBlueprint, ScreenItem, TechStackItem } from '../types';

interface BlueprintCardProps {
  blueprint: AppBlueprint;
  onRegenerate: () => void;
  onEditIdea: () => void;
}

export const BlueprintCard: React.FC<BlueprintCardProps> = ({
  blueprint,
  onRegenerate,
  onEditIdea,
}) => {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const getScreenIcon = (iconName: string) => {
    switch (iconName) {
      case 'log-in':
        return <LogIn className="w-4 h-4 text-blue-400" />;
      case 'home':
        return <Home className="w-4 h-4 text-indigo-400" />;
      case 'user':
        return <User className="w-4 h-4 text-purple-400" />;
      case 'settings':
        return <Settings className="w-4 h-4 text-sky-400" />;
      default:
        return <Smartphone className="w-4 h-4 text-indigo-400" />;
    }
  };

  const getTechIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'Cloud & Hosting':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  const handleCopyMarkdown = () => {
    const markdown = `# ${blueprint.appName} - App Blueprint
> ${blueprint.tagline}

## 🎯 Purpose
${blueprint.purpose}

## 👥 Target Users
${blueprint.targetUsers.map((u) => `- ${u}`).join('\n')}

## ⚡ Key Features
${blueprint.keyFeatures.map((f) => `- **${f.title}** (${f.category}): ${f.description}`).join('\n')}

## 📱 Suggested Screens
${blueprint.suggestedScreens.map((s) => `### ${s.name}\n- **Purpose**: ${s.purpose}\n- **Key Elements**: ${s.keyElements.join(', ')}`).join('\n\n')}

## 🛠️ Suggested Tech Stack
${blueprint.suggestedTechStack.map((t) => `- **${t.category}**: ${t.name} (${t.badge}) - ${t.reason}`).join('\n')}

---
*Generated with BodhX Blueprint Architect*`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(blueprint, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${blueprint.appName.toLowerCase().replace(/\s+/g, '-')}-blueprint.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  const activeScreen = blueprint.suggestedScreens[selectedScreenIndex] || blueprint.suggestedScreens[0];

  return (
    <section id="blueprint-result-section" className="py-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Main Sleek Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-slate-900/90 border border-white/[0.08] shadow-2xl shadow-blue-950/40 backdrop-blur-md overflow-hidden"
        >
          {/* Top Window Bar & Blueprint Header */}
          <div className="p-6 sm:p-8 bg-slate-900/95 border-b border-white/[0.06]">
            {/* Window traffic light dots */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] font-mono text-slate-500">blueprint.config.json</span>
              </div>
              <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                {blueprint.estimatedTimeline}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                    Generated Blueprint
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {blueprint.complexity}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-white tracking-tight">
                  {blueprint.appName}
                </h2>
                <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl font-normal">
                  {blueprint.tagline}
                </p>
              </div>

              {/* Header Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  id="copy-blueprint-btn"
                  onClick={handleCopyMarkdown}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all cursor-pointer shadow-sm"
                  title="Copy blueprint as Markdown"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Blueprint</span>
                    </>
                  )}
                </button>

                <button
                  id="download-blueprint-btn"
                  onClick={handleDownloadJSON}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all cursor-pointer shadow-sm"
                  title="Export JSON"
                >
                  {downloaded ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Exported</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-slate-400" />
                      <span>Export JSON</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onRegenerate}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white transition-all cursor-pointer shadow-md shadow-blue-950/40"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Regenerate</span>
                </button>
              </div>
            </div>
          </div>

          {/* Blueprint Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* 1. App Purpose & Target Users */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Purpose Block */}
              <div className="lg:col-span-7 bg-slate-800/40 p-5 sm:p-6 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                    <Target className="w-4 h-4" />
                    <span>App Purpose</span>
                  </div>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    {blueprint.purpose}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Architecture Complexity</span>
                  <span className="font-semibold text-blue-300 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-500/30">
                    {blueprint.complexity}
                  </span>
                </div>
              </div>

              {/* Target Users Block */}
              <div className="lg:col-span-5 bg-slate-800/40 p-5 sm:p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-3">
                    <Users className="w-4 h-4" />
                    <span>Target Users</span>
                  </div>
                  <div className="space-y-2">
                    {blueprint.targetUsers.map((user, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs sm:text-sm text-slate-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span>{user}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Key Features */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white">
                    Key Features
                  </h3>
                </div>
                <span className="text-xs text-slate-400">
                  {blueprint.keyFeatures.length} core capabilities identified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blueprint.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 border border-white/5 hover:border-blue-500/30 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-900 text-blue-300 border border-white/5">
                        {feature.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">0{idx + 1}</span>
                    </div>
                    <h4 className="text-base font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Suggested Screens (Interactive Inspector) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white">
                    Suggested Screens
                  </h3>
                </div>
                <span className="text-xs text-slate-400">
                  Click a screen to inspect UX elements
                </span>
              </div>

              {/* Screen Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {blueprint.suggestedScreens.map((screen, idx) => {
                  const isSelected = selectedScreenIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedScreenIndex(idx)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-950/40 border-blue-500/50 shadow-md shadow-blue-950/40'
                          : 'bg-slate-800/40 hover:bg-slate-800/80 border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-white/5">
                        {getScreenIcon(screen.iconName)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div
                          className={`text-xs sm:text-sm font-semibold truncate ${
                            isSelected ? 'text-white' : 'text-slate-300'
                          }`}
                        >
                          {screen.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Screen Detail & Interactive Wireframe Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/40 border border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Screen Narrative */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-md bg-blue-500/20 text-blue-300">
                        {getScreenIcon(activeScreen.iconName)}
                      </span>
                      <h4 className="text-lg font-bold text-white">{activeScreen.name}</h4>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeScreen.purpose}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key UI Elements & Components
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeScreen.keyElements.map((el, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-blue-300 border border-white/5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>{el}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual UI Wireframe Mockup */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full max-w-[280px] rounded-2xl bg-[#020617] border border-white/10 p-3.5 shadow-xl relative">
                      {/* Mock Mobile Status Bar */}
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mb-3 px-1">
                        <span>9:41</span>
                        <div className="w-12 h-2 bg-slate-800 rounded-full mx-auto" />
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                        </div>
                      </div>

                      {/* Mock App Header */}
                      <div className="h-8 rounded-lg bg-slate-850 mb-3 px-2 flex items-center justify-between text-xs text-slate-300 font-medium bg-slate-800/80 border border-white/5">
                        <span className="text-[11px] truncate">{activeScreen.name}</span>
                        <div className="w-4 h-4 rounded-full bg-blue-500/30" />
                      </div>

                      {/* Mock Screen Content */}
                      <div className="space-y-2">
                        <div className="h-14 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 p-2 flex flex-col justify-center">
                          <div className="w-3/4 h-2 bg-blue-400/50 rounded mb-1.5" />
                          <div className="w-1/2 h-2 bg-slate-700 rounded" />
                        </div>

                        {activeScreen.keyElements.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="h-8 rounded-lg bg-slate-900 border border-white/5 px-2.5 flex items-center justify-between text-[11px] text-slate-300"
                          >
                            <span className="truncate">{item}</span>
                            <ChevronRight className="w-3 h-3 text-slate-600" />
                          </div>
                        ))}
                      </div>

                      {/* Mock Bottom Navigation */}
                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-around text-slate-600">
                        <LogIn className={`w-3.5 h-3.5 ${activeScreen.iconName === 'log-in' ? 'text-blue-400' : ''}`} />
                        <Home className={`w-3.5 h-3.5 ${activeScreen.iconName === 'home' ? 'text-blue-400' : ''}`} />
                        <User className={`w-3.5 h-3.5 ${activeScreen.iconName === 'user' ? 'text-blue-400' : ''}`} />
                        <Settings className={`w-3.5 h-3.5 ${activeScreen.iconName === 'settings' ? 'text-blue-400' : ''}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Suggested Tech Stack */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Server className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white">
                    Suggested Tech Stack
                  </h3>
                </div>
                <span className="text-xs text-slate-400">
                  Production-ready stack
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {blueprint.suggestedTechStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-800/40 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-xl bg-slate-900 border border-white/5">
                          {getTechIcon(tech.category)}
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400">
                          {tech.badge}
                        </span>
                      </div>

                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {tech.category}
                      </div>
                      <h4 className="text-lg font-bold text-white">{tech.name}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-2">
                        {tech.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Blueprint Summary Note */}
            {blueprint.architectureNotes && blueprint.architectureNotes.length > 0 && (
              <div className="p-5 rounded-2xl bg-slate-800/30 border border-blue-500/20">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>Architecture & Data Flow Notes</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {blueprint.architectureNotes.map((note, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Bottom Footer Toolbar */}
          <div className="p-5 sm:p-6 bg-slate-900 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Ready for production deployment and development</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onEditIdea}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors cursor-pointer border border-slate-700"
              >
                Edit Idea Prompt
              </button>

              <button
                onClick={handleCopyMarkdown}
                className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md shadow-blue-900/40 hover:opacity-95 transition-all cursor-pointer"
              >
                {copied ? 'Copied to Clipboard!' : 'Copy Full Blueprint'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
