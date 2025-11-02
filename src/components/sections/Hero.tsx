import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Eye, Sparkles, Code, TrendingUp } from 'lucide-react';
import { personalInfo, modeAboutContent } from '../../data/portfolio';
import { scrollToSection } from '../../utils/smoothScroll';
import { useMode } from '../../contexts/ModeContext';
import HeroModeToggle from '../HeroModeToggle';

const Hero: React.FC = () => {
  const { mode } = useMode();
  
  const handleViewWork = () => {
    scrollToSection('projects');
  };

  const handleContactMe = () => {
    scrollToSection('contact');
  };


  // Mode-specific content
  const getModeContent = () => {
    const modeData = modeAboutContent[mode];
    return {
      headline: modeData.title,
      subtitle: modeData.subtitle,
      tagline: modeData.story,
      cta: modeData.cta,
      gradient: mode === 'marketing' 
        ? "from-orange-500 via-purple-500 to-pink-500"
        : mode === 'development'
        ? "from-blue-500 via-cyan-500 to-green-500"
        : "from-indigo-500 via-purple-500 to-violet-500",
      icon: mode === 'marketing' ? TrendingUp : mode === 'development' ? Code : Sparkles,
      bgGradient: mode === 'marketing'
        ? 'bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 dark:from-orange-950 dark:via-purple-950 dark:to-pink-950'
        : mode === 'development'
        ? 'bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50 dark:from-blue-950 dark:via-cyan-950 dark:to-green-950'
        : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 dark:from-indigo-950 dark:via-purple-950 dark:to-violet-950'
    };
  };

  const content = getModeContent();
  const Icon = content.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.section 
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="hero" 
        className={`min-h-screen flex items-center justify-center ${content.bgGradient} pt-16 transition-all duration-700`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
          {/* Professional Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800">
              <img
                src="/profile-photo.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-primary-600 to-teal-600 bg-clip-text text-transparent font-extrabold" style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0d9488 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Mode Toggle - Prominent Position */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <HeroModeToggle />
          </motion.div>

          {/* Professional Title with Icon */}
          <motion.div
            key={`${mode}-title`}
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent`} style={{ filter: 'drop-shadow(0 0 8px currentColor)' }} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {content.headline}
              </h2>
            </div>
            <p className={`text-lg md:text-xl font-medium bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent`}>
              {content.subtitle}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            key={`${mode}-tagline`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {content.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            key={`${mode}-cta`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={handleContactMe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold text-white shadow-xl flex items-center gap-2 text-lg"
              style={{
                background: mode === 'marketing'
                  ? 'linear-gradient(135deg, #f97316, #a855f7)'
                  : mode === 'development'
                  ? 'linear-gradient(135deg, #3b82f6, #10b981)'
                  : 'linear-gradient(135deg, #6366f1, #8b5cf6)'
              }}
            >
              <span>{content.cta}</span>
              <ArrowDown className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={handleViewWork}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 rounded-xl font-semibold transition-all flex items-center gap-2 text-lg"
              style={{
                borderColor: mode === 'marketing' ? '#f97316' : mode === 'development' ? '#3b82f6' : '#6366f1',
                color: mode === 'marketing' ? '#f97316' : mode === 'development' ? '#3b82f6' : '#6366f1'
              }}
            >
              <Eye size={20} />
              <span>View Work</span>
            </motion.button>
          </motion.div>

          {/* Location & Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-gray-600 dark:text-gray-400 mb-8"
          >
            <p className="text-lg font-medium">{personalInfo.location}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2 text-sm">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <span className="hidden sm:block">•</span>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </AnimatePresence>
  );
};

export default Hero;
