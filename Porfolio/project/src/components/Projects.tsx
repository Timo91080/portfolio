import React, { useState } from 'react';
import { Github, ExternalLink, Code, Smartphone, Globe, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import des images pour GameZone Manager
import admin1 from '../assets/admin1.png';
import admin2 from '../assets/admin2.png';
import admin3 from '../assets/admin3.png';
import admin4 from '../assets/admin4.png';
import loginadmin from '../assets/loginadmin.png';

// Import des images pour VitaMap
import vitamap1 from '../assets/vitamap1.png';
import vitamap2 from '../assets/vitamap2.png';
import vitamap3 from '../assets/vitamap3.png';

import warnium1 from '../assets/warnium1.png';
import warnium2 from '../assets/warnium2.png';
import warnium3 from '../assets/warnium3.png';    
import warnium4 from '../assets/warnium4.png';  
import warnium5 from '../assets/warnium5.png';  
import warnium6 from '../assets/warnium6.png';        

const Projects = () => {
  const [projectImageIndices, setProjectImageIndices] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  
  // Images pour GameZone Manager
  const gameZoneImages = [loginadmin, admin1, admin2, admin3, admin4];
  
  // Images pour VitaMap
  const vitaMapImages = [vitamap3, vitamap2, vitamap1];

  const warniumImages = [warnium1, warnium2, warnium3, warnium4, warnium5, warnium6];
  
  const getCurrentImageIndex = (projectTitle) => {
    return projectImageIndices[projectTitle] || 0;
  };
  
  const nextImage = (projectTitle, projectImages) => {
    setProjectImageIndices(prev => ({
      ...prev,
      [projectTitle]: prev[projectTitle] === projectImages.length - 1 ? 0 : (prev[projectTitle] || 0) + 1
    }));
  };
  
  const prevImage = (projectTitle, projectImages) => {
    setProjectImageIndices(prev => ({
      ...prev,
      [projectTitle]: prev[projectTitle] === 0 || !prev[projectTitle] ? projectImages.length - 1 : prev[projectTitle] - 1
    }));
  };
  
  const setImageIndex = (projectTitle, index) => {
    setProjectImageIndices(prev => ({
      ...prev,
      [projectTitle]: index
    }));
  };

  const openModal = (imageIndex, projectImages, projectTitle) => {
    setModalImageIndex(imageIndex);
    setActiveProject({ images: projectImages, title: projectTitle });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  const nextModalImage = () => {
    if (activeProject) {
      setModalImageIndex((prevIndex) => 
        prevIndex === activeProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevModalImage = () => {
    if (activeProject) {
      setModalImageIndex((prevIndex) => 
        prevIndex === 0 ? activeProject.images.length - 1 : prevIndex - 1
      );
    }
  };
  const projects = [
    {
      title: "GameeZone Manager",
      description: "Application complète pour la gestion et la réservation de stations de jeu. Interface moderne avec système d'authentification et dashboard administrateur.",
      technologies: ["React", "Vite", "TypeScript", "Node.js", "Express", "MySQL"],
      category: "Web Application",
      githubUrl: "https://github.com/Timo91080/projetproadmin",
      liveUrl: "#",
      images: gameZoneImages,
      features: [
        "Système de réservation en temps réel",
        "Dashboard administrateur",
        "Authentification utilisateur",
        "Controle des sessions de jeu",
      ]
    },
    {
  title: "Warnium",
  description: "Plateforme moderne d'hébergement et de gestion de serveurs avec interface utilisateur intuitive et tableau de bord complet.",
  technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
  category: "Platform",
  githubUrl: "#",
  liveUrl: "#",
  images: warniumImages,
  features: [
    "Gestion de serveurs en temps réel",
    "Interface de monitoring",
    "Déploiement automatisé",
    "Tableau de bord interactif"
  ]
},
    {
      title: "VitaMap",
      description: "Solution mobile interactive qui permet de visualiser sur une carte les maladies signalées (comme la grippe aviaire, le COVID-19, Ebola, etc.), d'afficher des zones colorées selon l'épidémie dominante par ville et de proposer des statistiques détaillées.",
      technologies: ["React Native", "Expo Go", "Node Js", "MYSql"],
      category: "Mobile App",
      githubUrl: "https://github.com/Timo91080/vitamap",
      liveUrl: "#",
      images: vitaMapImages,
      features: [
        "Visualisation des maladies sur carte interactive",
        "Zones colorées par épidémie dominante",
        "Statistiques détaillées (cas, dates, contagion)",
        "Onglet Notifications pour les tendances locales"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Mes Projets
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  {project.images ? (
                    // Carrousel pour les projets avec multiple images
                    <div className="relative w-full h-full">
                      <img 
                        src={project.images[getCurrentImageIndex(project.title)]} 
                        alt={`${project.title} - Image ${getCurrentImageIndex(project.title) + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => openModal(getCurrentImageIndex(project.title), project.images, project.title)}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center pointer-events-none">
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      

                      {/* Flèches de navigation */}
                      <button
                        onClick={() => prevImage(project.title, project.images)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 rounded-full transition-all duration-200"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => nextImage(project.title, project.images)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 rounded-full transition-all duration-200"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      {/* Indicateurs de position */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {project.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={() => setImageIndex(project.title, imageIndex)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              imageIndex === getCurrentImageIndex(project.title)
                                ? 'bg-white'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Image simple pour les autres projets
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Fonctionnalités clés :</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {/* <ExternalLink size={16} />
                     <span>Demo</span>*/}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal pour affichage en grand */}
      {isModalOpen && activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-7xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activeProject.images[modalImageIndex]}
              alt={`${activeProject.title} - Image ${modalImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
            >
              <X size={24} />
            </button>
            
            {/* Flèches de navigation dans le modal */}
            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Indicateurs de position dans le modal */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {activeProject.images.map((_, imageIndex) => (
                <button
                  key={imageIndex}
                  onClick={() => setModalImageIndex(imageIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    imageIndex === modalImageIndex
                      ? 'bg-white'
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
            
            {/* Compteur d'images */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {modalImageIndex + 1} / {activeProject.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;