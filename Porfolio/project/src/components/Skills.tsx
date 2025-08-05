import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "React.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "Next.js", level: 60 },
        { name: "HTML/CSS", level: 95 },
        { name: "Flutter", level: 60 },
        { name: "React Native", level: 60 }
      ]
    },
    {
      title: "Back-end",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "PHP", level: 40 },
        { name: "Symfony", level: 40 },
   
      ]
    },
    {
      title: "Base de données",
      skills: [
        { name: "MongoDB", level: 60 },

        { name: "Firebase", level: 50 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Outils",
      skills: [
        { name: "Git", level: 85 },
        { name: "Github", level: 85 },
        { name: "GitLab", level: 50 },
        { name: "Jenkins", level: 50 },
        { name: "Figma", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Compétences Techniques
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;