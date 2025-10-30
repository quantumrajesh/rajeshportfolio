import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Target, TrendingUp, Award } from 'lucide-react';
import { projects } from '../../data/portfolio';

const Projects: React.FC = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Featured Projects & Case Studies</h2>
            <p className="section-subtitle">
              Explore some of my most impactful digital marketing campaigns and their measurable results
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="card h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900">
                    <div className="aspect-video flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary-600 dark:bg-primary-400 rounded-full flex items-center justify-center">
                          <Target className="w-8 h-8 text-white dark:text-gray-900" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Project Screenshot
                        </p>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
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
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Key Results:
                      </h4>
                      <div className="space-y-1">
                        {project.keyMetrics.map((metric, metricIndex) => (
                          <div
                            key={metricIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            {getMetricIcon(metric)}
                            <span className="text-gray-700 dark:text-gray-300">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Used */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.skillsUsed.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {project.skillsUsed.length > 3 && (
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                            +{project.skillsUsed.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Details Expandable */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: 'auto', opacity: 1 }}
                    className="overflow-hidden border-t border-gray-200 dark:border-gray-700 pt-4"
                  >
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Challenge:
                        </span>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Strategy:
                        </span>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {project.strategy}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Results:
                        </span>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {project.results}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Want to see more detailed case studies or discuss your project?
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Let's Work Together
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
