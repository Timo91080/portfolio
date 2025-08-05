import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import cvtimothée from '../assets/TIMOTHEEcvfullstack.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvtimothée;
    link.download = 'TIMOTHEEcvfullstack.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            Timothée Dikete
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
               className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} 
               className="text-gray-700 hover:text-blue-600 transition-colors">Compétences</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} 
               className="text-gray-700 hover:text-blue-600 transition-colors">Expérience</a>
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} 
               className="text-gray-700 hover:text-blue-600 transition-colors">Formation</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
               className="text-gray-700 hover:text-blue-600 transition-colors">Projets</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
               className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={downloadCV}
              className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={18} />
              <span>CV PDF</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
                 className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} 
                 className="text-gray-700 hover:text-blue-600 transition-colors">Compétences</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} 
                 className="text-gray-700 hover:text-blue-600 transition-colors">Expérience</a>
              <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} 
                 className="text-gray-700 hover:text-blue-600 transition-colors">Formation</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
                 className="text-gray-700 hover:text-blue-600 transition-colors">Projets</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                 className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button
                onClick={downloadCV}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit"
              >
                <Download size={18} />
                <span>CV PDF</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;