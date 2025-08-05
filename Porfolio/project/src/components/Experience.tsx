import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "AFTLL",
      position: "Développeur Front-end",
      period: "2024",
      location: "Stage",
      description: "Développement d'interfaces utilisateur avec React et création de maquettes avec Figma",
      technologies: ["React", "Figma", "JavaScript"],
      achievements: [
        "Développement d'interfaces utilisateur modernes",
        "Collaboration avec l'équipe de design",
        "Maquettage et prototypage d'applications"
      ]
    },
    {
      company: "CFA ITIS",
      position: "Développeur Mobile",
      period: "2022",
      location: "Stage",
      description: "Développement d'applications mobiles avec Flutter dans le cadre de projets étudiants",
      technologies: ["Flutter", "Dart", "Mobile Development"],
      achievements: [
        "Création d'applications mobiles cross-platform",
        "Maîtrise du framework Flutter",
        "Gestion de l'état et navigation"
      ]
    },
    {
      company: "CHSF",
      position: "Support Technique Informatique",
      period: "2021",
      location: "Stage",
      description: "Support technique et maintenance informatique, assistance aux utilisateurs",
      technologies: ["Support IT", "Maintenance", "Troubleshooting"],
      achievements: [
        "Résolution de problèmes techniques",
        "Assistance utilisateurs",
        "Maintenance préventive"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Expérience Professionnelle
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:text-right">
                    <div className="flex items-center space-x-2 text-gray-600 mb-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Réalisations :</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <ChevronRight size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;