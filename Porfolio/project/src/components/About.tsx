import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Passionné",
      description: "Développement web depuis plusieurs années avec une soif d'apprendre constante"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Collaboratif",
      description: "Expérience en équipe et capacité à travailler dans des environnements Agile"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Curieux",
      description: "Toujours à l'affût des dernières technologies et bonnes pratiques"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Rigoureux",
      description: "Attention aux détails et respect des standards de qualité"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            À Propos de Moi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Étudiant en Bachelor Informatique à Ynov Campus, je suis passionné par le développement web 
                et la création d'applications modernes. Mon parcours m'a permis d'acquérir une solide base 
                technique aussi bien en front-end qu'en back-end.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                J'ai eu l'opportunité de travailler sur des projets variés, allant du développement mobile 
                la création d'applications web avec React. Cette diversité d'expériences 
                m'a permis de développer une vision globale du développement web.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Je recherche actuellement une alternance pour mettre en pratique mes compétences et 
                contribuer à des projets concrets au sein d'une équipe dynamique.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mes Valeurs</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Autonomie et prise d'initiative</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Apprentissage continu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Qualité du code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Travail d'équipe</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {quality.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {quality.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;