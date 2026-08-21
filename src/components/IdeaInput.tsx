import React from 'react';
import { Sparkles, Wand2, RefreshCw, CornerDownLeft } from 'lucide-react';
import { SAMPLE_PROMPTS } from '../data/blueprints';

interface IdeaInputProps {
  ideaText: string;
  setIdeaText: (text: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export const IdeaInput: React.FC<IdeaInputProps> = ({
  ideaText,
  setIdeaText,
  onGenerate,
  isLoading,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (ideaText.trim() && !isLoading) {
        onGenerate();
      }
    }
  };

  const handleSelectSample = (prompt: string) => {
    setIdeaText(prompt);
  };

  return (
    <section id="idea-input-section" className="py-6 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="space-y-4">
          {/* Glowing Focus Container */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500" />
            <div className="relative bg-slate-900/95 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <label htmlFor="idea-textarea" className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Your App Idea
                  </label>
                </div>

                {ideaText && (
                  <button
                    type="button"
                    onClick={() => setIdeaText('')}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              <textarea
                id="idea-textarea"
                rows={4}
                value={ideaText}
                onChange={(e) => setIdeaText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Example: Build a food delivery app for college students."
                disabled={isLoading}
                className="w-full bg-[#020617]/90 text-slate-200 placeholder-slate-600 rounded-xl p-4 text-sm sm:text-base border border-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              />

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <span>Press</span>
                  <CornerDownLeft className="w-3 h-3 text-slate-400" />
                  <span>Enter to generate</span>
                </span>
                <span>{ideaText.length} characters</span>
              </div>
            </div>
          </div>

          {/* Full-width Sleek Action Button */}
          <button
            id="generate-blueprint-btn"
            type="button"
            onClick={onGenerate}
            disabled={isLoading || !ideaText.trim()}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-blue-900/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center justify-center gap-2.5"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin text-white" />
                <span>Generating Blueprint...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5 text-blue-200" />
                <span>Generate Blueprint</span>
              </>
            )}
          </button>

          {/* Prompt presets / Inspiration */}
          <div className="pt-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Try an example prompt:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectSample(prompt)}
                  className="text-xs text-left px-3 py-1.5 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 transition-all cursor-pointer"
                >
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
