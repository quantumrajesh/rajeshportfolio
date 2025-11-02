import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code2, Zap } from 'lucide-react';
import { useMode } from '../contexts/ModeContext';

const ModeIndicator: React.FC = () => {
  const { mode } = useMode();
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    // Show indicator when mode changes
    setShowIndicator(true);
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [mode]);

  const getModeInfo = () => {
    switch (mode) {
      case 'marketing':
        return {
          icon: Briefcase,
          label: 'Marketing Mode',
          description: 'Showcasing digital marketing expertise',
          color: 'from-orange-500 to-purple-500',
          bgColor: 'bg-orange-500',
        };
      case 'development':
        return {
          icon: Code2,
          label: 'Developer Mode',
          description: 'Showcasing full-stack development',
          color: 'from-blue-500 to-green-500',
          bgColor: 'bg-blue-500',
        };
      case 'both':
      default:
        return {
          icon: Zap,
          label: 'Full Portfolio',
          description: 'Where strategy meets code',
          color: 'from-indigo-500 to-violet-500',
          bgColor: 'bg-indigo-500',
        };
    }
  };

  const modeInfo = getModeInfo();
  const Icon = modeInfo.icon;

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className={`bg-gradient-to-r ${modeInfo.color} text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3`}>
            <Icon className="w-5 h-5" />
            <div>
              <p className="font-bold text-sm">{modeInfo.label}</p>
              <p className="text-xs opacity-90">{modeInfo.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModeIndicator;
