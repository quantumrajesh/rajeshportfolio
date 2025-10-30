import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { scrollToSection } from '../../utils/smoothScroll';

const Hero: React.FC = () => {
  const handleViewWork = () => {
    scrollToSection('projects');
  };

  const handleContactMe = () => {
    scrollToSection('contact');
  };

  const handleDownloadCV = () => {
    // Implement CV download functionality
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 pt-16">
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

          {/* Professional Title */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
          >
            {personalInfo.headline}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={handleViewWork}
              className="btn-primary flex items-center gap-2 w-full sm:w-auto"
            >
              <Eye size={20} />
              View Work
            </button>
            <button
              onClick={handleContactMe}
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto"
            >
              Contact Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              <Download size={20} />
              Download CV
            </button>
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
    </section>
  );
};

export default Hero;
