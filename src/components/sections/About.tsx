import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stats, modeAboutContent } from '../../data/portfolio';
import { TrendingUp, Users, Target, Heart, CheckCircle } from 'lucide-react';
import { useMode } from '../../contexts/ModeContext';

const About: React.FC = () => {
  const { mode } = useMode();
  const aboutContent = modeAboutContent[mode];
  const iconMap = {
    'trending-up': TrendingUp,
    'users': Users,
    'target': Target,
    'heart': Heart,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div 
            key={`${mode}-header`}
            variants={itemVariants} 
            className="text-center mb-16"
          >
            <h2 className="section-title">{aboutContent.title}</h2>
            <p className="section-subtitle">
              {aboutContent.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Professional Summary */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${mode}-summary`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    My Story
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {aboutContent.story}
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      My Approach
                    </h4>
                    <div className="space-y-3">
                      {aboutContent.approach.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Skills & Stats */}
            <motion.div variants={itemVariants}>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
                  
                  // Different colors for each stat card
                  const colors = [
                    { bg: 'bg-orange-100 dark:bg-orange-900/30', icon: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
                    { bg: 'bg-blue-100 dark:bg-blue-900/30', icon: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
                    { bg: 'bg-purple-100 dark:bg-purple-900/30', icon: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
                    { bg: 'bg-green-100 dark:bg-green-900/30', icon: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
                  ];
                  
                  const color = colors[index % colors.length];
                  
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 ${color.border} text-center transition-all`}
                    >
                      <div className="flex justify-center mb-3">
                        <div className={`p-3 ${color.bg} rounded-xl`}>
                          <IconComponent className={`w-6 h-6 ${color.icon}`} />
                        </div>
                      </div>
                      <div className={`text-3xl font-bold mb-1 ${color.icon}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
