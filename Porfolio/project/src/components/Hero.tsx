import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import photo from '../assets/photo.JPG';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img 
                src={photo} 
                alt="Timothée Dikete" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Timothée Dikete
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
              Développeur Web Full Stack
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Étudiant en Bac+4 Développement Fullstack passionné par la création d'applications web modernes. 
              Je recherche une opportunité d'alternance pour approfondir mes compétences et contribuer à des projets concrets.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md">
              <MapPin size={18} className="text-blue-600" />
              <span className="text-gray-700">Évry-Courcouronnes</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md">
              <Mail size={18} className="text-blue-600" />
              <span className="text-gray-700">diketetimothee2@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md">
              <Phone size={18} className="text-blue-600" />
              <span className="text-gray-700">06 52 56 55 50</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Me Contacter
            </a>
            <a href="#projects" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold border border-blue-600">
              Mes Projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;