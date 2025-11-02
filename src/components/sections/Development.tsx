import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { developmentProjects, techStack } from '../../data/portfolio';
import { useMode } from '../../contexts/ModeContext';

const Development: React.FC = () => {
  const { isDevelopment } = useMode();
  
  // Don't render if in marketing-only mode
  if (!isDevelopment) {
    return null;
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="development" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h2 className="section-title mb-0">Development Projects</h2>
            </div>
            <p className="section-subtitle">
              Building scalable solutions that bridge marketing strategy with technical excellence
            </p>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Tech Stack & Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 shadow-md"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech: any, idx: number) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-gray-900 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 shadow-sm"
                      >
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="card h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                    <div className="aspect-video flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 dark:bg-purple-400 rounded-full flex items-center justify-center">
                          <Code2 className="w-8 h-8 text-white dark:text-gray-900" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Project Screenshot
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.keyMetrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full font-medium"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Used */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.skillsUsed.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium flex-1 justify-center"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Interested in collaborating on a development project?
            </p>
            <a
              href="https://github.com/quantumrajesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Development;
