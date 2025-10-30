import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '../../data/portfolio';

const Certifications: React.FC = () => {
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Certifications & Credentials</h2>
            <p className="section-subtitle">
              Professional certifications that validate my expertise in digital marketing platforms
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="card h-full">
                  <div className="flex items-start gap-4">
                    {/* Certification Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Certification Details */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                        {cert.issuer}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar size={14} />
                        <span>Certified in {cert.date}</span>
                      </div>

                      {cert.credentialId && (
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Credential ID: 
                          </span>
                          <code className="ml-2 text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono">
                            {cert.credentialId}
                          </code>
                        </div>
                      )}

                      {/* Verify Credential Link */}
                      {cert.url && cert.url !== '#' && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
                        >
                          <ExternalLink size={16} />
                          Verify Credential
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Certification Badge/Logo Placeholder */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-center">
                      <div className="w-24 h-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {cert.issuer.split(' ')[0]} Logo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="card inline-block">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                I'm committed to staying current with the latest digital marketing trends and platform updates. 
                Currently pursuing additional certifications in AI-driven marketing and advanced analytics.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
