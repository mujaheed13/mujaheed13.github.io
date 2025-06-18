
import React from 'react';
import { Code, Layers, Zap, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      delay: "delay-0"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Nest.js", "Express", "NODE RED"],
      color: "from-green-500 to-emerald-500",
      icon: Terminal,
      delay: "delay-200"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
      color: "from-purple-500 to-pink-500",
      icon: Layers,
      delay: "delay-400"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Kafka", "TypeScript"],
      color: "from-orange-500 to-red-500",
      icon: Zap,
      delay: "delay-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className={`group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 animate-fadeInUp ${category.delay}`}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative overflow-hidden rounded-lg bg-muted/50 p-3 border border-border/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}></div>
                      <span className="relative text-sm font-medium text-foreground/80 group-hover/skill:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
