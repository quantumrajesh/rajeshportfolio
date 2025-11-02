import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ViewMode = 'marketing' | 'development' | 'both';

interface ModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  isMarketing: boolean;
  isDevelopment: boolean;
  isBoth: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ViewMode>(() => {
    // Load from localStorage or default to 'both'
    const savedMode = localStorage.getItem('portfolioMode');
    return (savedMode as ViewMode) || 'both';
  });

  const setMode = (newMode: ViewMode) => {
    setModeState(newMode);
    localStorage.setItem('portfolioMode', newMode);
    
    // Update CSS variables for theme colors
    updateThemeColors(newMode);
    
    // Update document title
    updateDocumentTitle(newMode);
  };

  const updateDocumentTitle = (currentMode: ViewMode) => {
    switch (currentMode) {
      case 'marketing':
        document.title = 'Rajesh Choudhary — Digital Marketing Strategist';
        break;
      case 'development':
        document.title = 'Rajesh Choudhary — Full-Stack Developer';
        break;
      case 'both':
        document.title = 'Rajesh Choudhary — Creative Technologist';
        break;
    }
  };

  const updateThemeColors = (currentMode: ViewMode) => {
    const root = document.documentElement;
    
    switch (currentMode) {
      case 'marketing':
        // Warmer tones - Orange/Purple
        root.style.setProperty('--mode-primary', '#f97316'); // orange-500
        root.style.setProperty('--mode-secondary', '#a855f7'); // purple-500
        root.style.setProperty('--mode-accent', '#fb923c'); // orange-400
        root.style.setProperty('--mode-gradient-from', '#f97316');
        root.style.setProperty('--mode-gradient-to', '#a855f7');
        break;
      case 'development':
        // Cooler tones - Blue/Green
        root.style.setProperty('--mode-primary', '#3b82f6'); // blue-500
        root.style.setProperty('--mode-secondary', '#10b981'); // green-500
        root.style.setProperty('--mode-accent', '#06b6d4'); // cyan-500
        root.style.setProperty('--mode-gradient-from', '#3b82f6');
        root.style.setProperty('--mode-gradient-to', '#10b981');
        break;
      case 'both':
        // Balanced neutral - Blue/Purple
        root.style.setProperty('--mode-primary', '#6366f1'); // indigo-500
        root.style.setProperty('--mode-secondary', '#8b5cf6'); // violet-500
        root.style.setProperty('--mode-accent', '#0284c7'); // sky-600
        root.style.setProperty('--mode-gradient-from', '#6366f1');
        root.style.setProperty('--mode-gradient-to', '#8b5cf6');
        break;
    }
  };

  useEffect(() => {
    updateThemeColors(mode);
    updateDocumentTitle(mode);
  }, [mode]);

  const isMarketing = mode === 'marketing' || mode === 'both';
  const isDevelopment = mode === 'development' || mode === 'both';
  const isBoth = mode === 'both';

  return (
    <ModeContext.Provider value={{ mode, setMode, isMarketing, isDevelopment, isBoth }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
