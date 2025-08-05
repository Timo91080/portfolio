import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Timothée Dikete</h3>
              <p className="text-gray-400 mb-4">
                Développeur Web Full Stack passionné par la création d'applications modernes et performantes.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Timo91080" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/timoth%C3%A9e-dikete-6992ba21a/" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:diketetimothee2@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Compétences</a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Expérience</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projets</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>diketetimothee2@gmail.com</p>
                <p>06 52 56 55 50</p>
                <p>Évry-Courcouronnes, France</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Fait avec <Heart size={16} className="text-red-500 mx-1" /> par Timothée Dikete © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;