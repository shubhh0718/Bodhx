import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Palette, ClipboardList, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

interface Step {
  id: number;
  emoji: string;
  icon: React.ElementType;
  text: string;
  subtext: string;
  duration: number; // in ms
}

const STEPS: Step[] = [
  {
    id: 1,
    emoji: '🤖',
    icon: Bot,
    text: 'Understanding your idea...',
    subtext: 'Analyzing core workflow, target users, and value proposition',
    duration: 800,
  },
  {
    id: 2,
    emoji: '🎨',
    icon: Palette,
    text: 'Designing your app...',
    subtext: 'Synthesizing UI screens, user journeys, and component architecture',
    duration: 900,
  },
  {
    id: 3,
    emoji: '📋',
    icon: ClipboardList,
    text: 'Creating blueprint...',
    subtext: 'Selecting optimal tech stack, database schemas, and MVP roadmap',
    duration: 800,
  },
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Phase 1 -> 2
    const timer1 = setTimeout(() => {
      setCurrentStepIndex(1);
      setProgress(55);
    }, STEPS[0].duration);

    // Phase 2 -> 3
    const timer2 = setTimeout(() => {
      setCurrentStepIndex(2);
      setProgress(90);
    }, STEPS[0].duration + STEPS[1].duration);

    // Complete
    const timer3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        onComplete();
      }, 400);
    }, STEPS[0].duration + STEPS[1].duration + STEPS[2].duration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const activeStep = STEPS[currentStepIndex];

  return (
    <div className="py-10 px-6 md:px-10 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl p-8 rounded-3xl bg-slate-900/90 border border-white/[0.08] shadow-2xl shadow-blue-950/40 backdrop-blur-md relative overflow-hidden"
      >
        {/* Glow ambient accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Central Animated Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1.5px] shadow-lg shadow-blue-500/25">
              <div className="w-full h-full bg-[#020617] rounded-[14px] flex items-center justify-center text-3xl">
                <span>{activeStep.emoji}</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1 shadow-md">
              <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
            </div>
          </div>

          {/* Current Step Text Display */}
          <div className="min-h-[64px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-white flex items-center justify-center gap-2">
                  <span>{activeStep.emoji}</span>
                  <span>{activeStep.text}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm">
                  {activeStep.subtext}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Continuous Progress Bar */}
          <div className="w-full mt-6 bg-slate-950 rounded-full h-2 overflow-hidden border border-white/[0.06] p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.4 }}
            />
          </div>

          {/* Step Timeline Checklist */}
          <div className="w-full mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-1 gap-2.5 text-left">
            {STEPS.map((step, idx) => {
              const isCompleted = currentStepIndex > idx;
              const isCurrent = currentStepIndex === idx;

              return (
                <div
                  key={step.id}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 border ${
                    isCurrent
                      ? 'bg-blue-950/30 border-blue-500/40 shadow-sm'
                      : isCompleted
                      ? 'bg-slate-800/30 border-white/5 opacity-80'
                      : 'bg-slate-800/10 border-transparent opacity-40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{step.emoji}</span>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isCurrent
                          ? 'text-blue-300 font-semibold'
                          : isCompleted
                          ? 'text-slate-300'
                          : 'text-slate-500'
                      }`}
                    >
                      {step.text}
                    </span>
                  </div>

                  <div>
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : isCurrent ? (
                      <Loader2 className="w-3.5 h-3.5 text-blue-400 animate-spin" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-1" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-blue-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Assembling your custom app blueprint...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
