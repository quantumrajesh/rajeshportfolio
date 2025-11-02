import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { scrollToSection } from '../utils/smoothScroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center font-bold text-lg">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-lg">{personalInfo.name}</h3>
                <p className="text-gray-400 text-sm">{personalInfo.role}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Where marketing strategy meets code — building digital solutions that drive growth
            </p>
            <p className="text-gray-400 text-sm">
              Based in {personalInfo.location}
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-4">
              Ready to transform your digital presence?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-2 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
