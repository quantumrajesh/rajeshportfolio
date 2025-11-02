import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Target, TrendingUp, Award, Code2, Briefcase, Sparkles } from 'lucide-react';
import { marketingProjects, developmentProjects } from '../../data/portfolio';
import { useMode } from '../../contexts/ModeContext';

type ProjectFilter = 'marketing' | 'development' | 'both';

const UnifiedProjects: React.FC = () => {
  const { mode } = useMode();
  const [filter, setFilter] = useState<ProjectFilter>('both');

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getMetricIcon = (metric: string) => {
    if (metric.includes('Increase') || metric.includes('Traffic') || metric.includes('Reach')) {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    }
    if (metric.includes('Rankings') || metric.includes('Position') || metric.includes('Leadership')) {
      return <Award className="w-4 h-4 text-yellow-500" />;
    }
    return <Target className="w-4 h-4 text-blue-500" />;
  };

  // Filter projects based on selection
  const showMarketing = filter === 'marketing' || filter === 'both';
  const showDevelopment = filter === 'development' || filter === 'both';

  const filteredMarketingProjects = showMarketing ? marketingProjects : [];
  const filteredDevelopmentProjects = showDevelopment ? developmentProjects : [];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                My Projects
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore my work across marketing campaigns and development projects
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('marketing')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  filter === 'marketing'
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span>Marketing Projects</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('development')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  filter === 'development'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500'
                }`}
              >
                <Code2 className="w-5 h-5" />
                <span>Development Projects</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('both')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  filter === 'both'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                <span>All Projects</span>
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Marketing Projects */}
              {showMarketing && filteredMarketingProjects.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    Marketing Campaigns
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMarketingProjects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all group"
                      >
                        {/* Project Image */}
                        {project.imageUrl && (
                          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900 dark:to-pink-900">
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              Marketing
                            </div>
                            {(project as any).ranking && (
                              <div className="absolute top-3 left-3 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                {(project as any).ranking} in Jaipur
                              </div>
                            )}
                            {(project as any).rating && (
                              <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                                <span>⭐</span>
                                <span>{(project as any).rating}</span>
                                <span className="text-gray-500">({(project as any).reviews})</span>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="p-6">
                          {/* Title & Description */}
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                            {project.title}
                          </h4>
                          {(project as any).company && (
                            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">
                              {(project as any).company} • {(project as any).duration}
                            </p>
                          )}
                          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                            {project.description}
                          </p>

                          {/* Key Metrics */}
                          <div className="space-y-2 mb-4">
                            {project.keyMetrics.slice(0, 3).map((metric: string, idx: number) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                {getMetricIcon(metric)}
                                <span className="text-gray-700 dark:text-gray-300">{metric}</span>
                              </div>
                            ))}
                          </div>

                          {/* Link */}
                          {project.imageUrl && (
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold text-sm"
                            >
                              <span>View Project</span>
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Development Projects */}
              {showDevelopment && filteredDevelopmentProjects.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    Development Projects
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDevelopmentProjects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all group"
                      >
                        {/* Project Image */}
                        {project.imageUrl && (
                          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900">
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              Development
                            </div>
                          </div>
                        )}

                        <div className="p-6">
                          {/* Title & Description */}
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                          {(project as any).company && (
                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                              {(project as any).company} • {(project as any).duration}
                            </p>
                          )}
                          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.skillsUsed.slice(0, 4).map((tech: string, idx: number) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Links */}
                          <div className="flex gap-4">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm"
                              >
                                <Github size={16} />
                                <span>Code</span>
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm"
                              >
                                <ExternalLink size={16} />
                                <span>Live Demo</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default UnifiedProjects;
