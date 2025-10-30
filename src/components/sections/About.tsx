import React from 'react';
import { motion } from 'framer-motion';
import { skills, stats } from '../../data/portfolio';
import { TrendingUp, Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate digital marketing strategist with expertise in AI-driven campaigns and performance marketing
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Professional Summary */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Professional Summary
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Digital Marketing Strategist with 3+ years of experience driving measurable growth through 
                  data-driven marketing strategies. Specializing in performance marketing, AI-powered content creation, 
                  and multi-channel campaign optimization.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Proven track record of delivering 150%+ engagement increases, growing social media followings 
                  organically, and optimizing ad campaigns for maximum ROI. Expert in leveraging cutting-edge 
                  AI tools and analytics to stay ahead of digital marketing trends.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Based in Jaipur, Rajasthan, I help businesses transform their digital presence and achieve 
                  sustainable growth through strategic marketing initiatives and innovative campaign execution.
                </p>
              </div>
            </motion.div>

            {/* Skills & Stats */}
            <motion.div variants={itemVariants}>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="card text-center"
                    >
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Core Skills & Expertise
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
