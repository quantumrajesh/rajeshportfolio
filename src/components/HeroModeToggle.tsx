import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Zap } from 'lucide-react';
import { useMode, ViewMode } from '../contexts/ModeContext';

const HeroModeToggle: React.FC = () => {
  const { mode, setMode } = useMode();

  const modes = [
    {
      id: 'marketing' as ViewMode,
      label: 'Marketer',
      icon: Briefcase,
      emoji: '👔',
      description: 'View me as a',
    },
    {
      id: 'both' as ViewMode,
      label: 'Both',
      icon: Zap,
      emoji: '⚡',
      description: 'View me as',
    },
    {
      id: 'development' as ViewMode,
      label: 'Developer',
      icon: Code2,
      emoji: '💻',
      description: 'View me as a',
    },
  ];

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex flex-col items-center gap-3">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Show my skills as a
        </p>
        
        {/* Desktop Version */}
        <div className="hidden sm:flex bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 border-2 border-gray-200 dark:border-gray-700">
          <div className="flex gap-2 relative">
            {modes.map((modeOption) => {
              const Icon = modeOption.icon;
              const isActive = mode === modeOption.id;
              
              return (
                <motion.button
                  key={modeOption.id}
                  onClick={() => setMode(modeOption.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white shadow-lg z-10'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="heroActiveMode"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: mode === 'marketing' 
                          ? 'linear-gradient(135deg, #f97316, #a855f7)'
                          : mode === 'development'
                          ? 'linear-gradient(135deg, #3b82f6, #10b981)'
                          : 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{modeOption.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile Version */}
        <div className="flex sm:hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-1.5 border-2 border-gray-200 dark:border-gray-700 w-full max-w-sm">
          <div className="flex gap-1.5 w-full relative">
            {modes.map((modeOption) => {
              const isActive = mode === modeOption.id;
              
              return (
                <motion.button
                  key={modeOption.id}
                  onClick={() => setMode(modeOption.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex-1 px-3 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex flex-col items-center gap-1 ${
                    isActive
                      ? 'text-white shadow-lg z-10'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="heroActiveMobilMode"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: mode === 'marketing' 
                          ? 'linear-gradient(135deg, #f97316, #a855f7)'
                          : mode === 'development'
                          ? 'linear-gradient(135deg, #3b82f6, #10b981)'
                          : 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="text-xl relative z-10">{modeOption.emoji}</span>
                  <span className="relative z-10 text-xs">{modeOption.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-500 text-center max-w-xs">
          Switch between modes to see how I can help you
        </p>
      </div>
    </div>
  );
};

export default HeroModeToggle;
