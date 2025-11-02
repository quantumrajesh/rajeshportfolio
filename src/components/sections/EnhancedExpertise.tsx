import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { expertiseContent } from '../../data/portfolio';
import { useMode } from '../../contexts/ModeContext';

const EnhancedExpertise: React.FC = () => {
  const { mode } = useMode();
  const content = expertiseContent[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${content.color} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr ${content.color} rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className={`w-8 h-8 bg-gradient-to-r ${content.color} bg-clip-text text-transparent`} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Dual Expertise
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Strategy Meets Code — Where marketing insights drive technical solutions
            </p>
          </motion.div>

          {/* Mode-Specific Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Heading & Subtext */}
              <div className="text-center max-w-3xl mx-auto">
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${content.color} bg-clip-text text-transparent`}>
                  {content.heading}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {content.subtext}
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content.paragraph}
                </p>
              </div>

              {/* Focus Areas Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {content.focusAreas.map((area, index) => (
                  <motion.div
                    key={`${mode}-${area.category}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  >
                    {/* Category Header */}
                    <div className="mb-4">
                      <div 
                        className="w-12 h-1 rounded-full mb-3"
                        style={{ background: content.accentColor }}
                      ></div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {area.category}
                      </h4>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-default hover:scale-105"
                          style={{
                            backgroundColor: `${content.accentColor}15`,
                            color: content.accentColor,
                            border: `1px solid ${content.accentColor}30`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={`h-1 w-32 mx-auto rounded-full bg-gradient-to-r ${content.color} mt-12`}
              ></motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedExpertise;
