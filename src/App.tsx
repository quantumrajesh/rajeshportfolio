import React from 'react';
import { ModeProvider } from './contexts/ModeContext';
import Header from './components/Header';
import ModeIndicator from './components/ModeIndicator';
import Hero from './components/sections/Hero';
import EnhancedExpertise from './components/sections/EnhancedExpertise';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import UnifiedProjects from './components/sections/UnifiedProjects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './utils/smoothScroll';

function AppContent() {
  const sectionIds = ['hero', 'expertise', 'about', 'experience', 'projects', 'development', 'certifications', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header activeSection={activeSection} />
      <ModeIndicator />
      
      <main>
        <Hero />
        <EnhancedExpertise />
        <About />
        <Experience />
        <UnifiedProjects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ModeProvider>
      <AppContent />
    </ModeProvider>
  );
}

export default App;
