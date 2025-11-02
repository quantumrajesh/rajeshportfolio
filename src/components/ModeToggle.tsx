import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Zap } from 'lucide-react';
import { useMode, ViewMode } from '../contexts/ModeContext';

const ModeToggle: React.FC = () => {
  const { mode, setMode } = useMode();

  const modes = [
    {
      id: 'marketing' as ViewMode,
      label: 'Marketer',
      icon: Briefcase,
      color: 'from-orange-500 to-purple-500',
      bgColor: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      id: 'both' as ViewMode,
      label: 'Both',
      icon: Zap,
      color: 'from-indigo-500 to-violet-500',
      bgColor: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
    },
    {
      id: 'development' as ViewMode,
      label: 'Developer',
      icon: Code2,
      color: 'from-blue-500 to-green-500',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
  ];

  return (
    <div className="fixed top-20 right-4 z-40 hidden md:block">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-2 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 text-center px-2 mb-1">
            View as
          </p>
          {modes.map((modeOption) => {
            const Icon = modeOption.icon;
            const isActive = mode === modeOption.id;
            
            return (
              <motion.button
                key={modeOption.id}
                onClick={() => setMode(modeOption.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? `${modeOption.bgColor} text-white shadow-lg`
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMode"
                    className={`absolute inset-0 bg-gradient-to-r ${modeOption.color} rounded-xl`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="text-sm font-medium relative z-10 whitespace-nowrap">
                  {modeOption.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

// Mobile version
export const MobileModeToggle: React.FC = () => {
  const { mode, setMode } = useMode();

  const modes = [
    { id: 'marketing' as ViewMode, label: '👔 Marketer', emoji: '👔' },
    { id: 'both' as ViewMode, label: '⚡ Both', emoji: '⚡' },
    { id: 'development' as ViewMode, label: '💻 Developer', emoji: '💻' },
  ];

  return (
    <div className="md:hidden w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex gap-2 justify-center">
        {modes.map((modeOption) => {
          const isActive = mode === modeOption.id;
          
          return (
            <motion.button
              key={modeOption.id}
              onClick={() => setMode(modeOption.id)}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {modeOption.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ModeToggle;
