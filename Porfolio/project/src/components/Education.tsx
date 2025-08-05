import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor Informatique",
      school: "Ynov Campus",
      location: "Nanterre",
      period: "2024-2025",
      description: "Formation spécialisée en développement fullstack avec focus sur les technologies modernes",
      status: "Obtenu",
      specialization: "Développement Fullstack"
    },
    {
      degree: "BTS SIO SLAM",
      school: "CFA ITIS",
      location: "Évry-Courcouronnes",
      period: "2021-2024",
      description: "Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers",
      status: "Obtenu",
      specialization: "Développement d'applications"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Formation
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold mb-2">
                        {edu.school}
                      </p>
                      <p className="text-gray-600 mb-2">
                        {edu.specialization}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:text-right mt-4 md:mt-0">
                    <div className="flex items-center space-x-2 text-gray-600 mb-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'En cours' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;