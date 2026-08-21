/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IdeaInput } from './components/IdeaInput';
import { LoadingScreen } from './components/LoadingScreen';
import { BlueprintCard } from './components/BlueprintCard';
import { Footer } from './components/Footer';
import { AppBlueprint } from './types';
import { COLLEGE_FOOD_BLUEPRINT, generateBlueprintFromIdea } from './data/blueprints';

export default function App() {
  const [ideaText, setIdeaText] = useState<string>('Build a food delivery app for college students');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blueprint, setBlueprint] = useState<AppBlueprint | null>(null);

  const ideaInputRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleStartBuilding = () => {
    const el = document.getElementById('idea-input-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const textarea = document.getElementById('idea-textarea');
      if (textarea) {
        textarea.focus();
      }
    }
  };

  const handleGenerate = () => {
    if (!ideaText.trim()) return;
    setIsLoading(true);
    // Smooth scroll to loading section
    setTimeout(() => {
      const el = document.getElementById('loading-or-result-anchor');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleLoadingComplete = () => {
    const generated = generateBlueprintFromIdea(ideaText);
    setBlueprint(generated);
    setIsLoading(false);

    // Scroll to the generated blueprint card
    setTimeout(() => {
      const el = document.getElementById('blueprint-result-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleReset = () => {
    setBlueprint(null);
    setIsLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditIdea = () => {
    const el = document.getElementById('idea-input-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const textarea = document.getElementById('idea-textarea');
      if (textarea) {
        textarea.focus();
      }
    }
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden">
      {/* Sleek Interface Ambient Background Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-purple-600 blur-[130px] rounded-full" />
      </div>

      {/* Navigation Header */}
      <Navbar onReset={handleReset} hasBlueprint={!!blueprint} />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <HeroSection onStartBuilding={handleStartBuilding} />

        {/* 2. Idea Input */}
        <div ref={ideaInputRef}>
          <IdeaInput
            ideaText={ideaText}
            setIdeaText={setIdeaText}
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />
        </div>

        {/* Anchor point for smooth auto-scroll */}
        <div id="loading-or-result-anchor" />

        {/* 3. Loading Screen */}
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}

        {/* 4. Blueprint Card Result */}
        {!isLoading && blueprint && (
          <div ref={resultRef}>
            <BlueprintCard
              blueprint={blueprint}
              onRegenerate={handleRegenerate}
              onEditIdea={handleEditIdea}
            />
          </div>
        )}
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
